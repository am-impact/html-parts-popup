var FW = FW || {};

FW.popup = ( function( window, undefined ) {
    var $popup_wrap = $('<div class="popup__overlay"></div>').addClass('visuallyhidden'),
        $popup_inner = $('<div class="popup__inner"></div>').appendTo( $popup_wrap ),
        $popup_top = $('<div class="popup__top"></div>').appendTo( $popup_inner ),
        $popup_content = $('<div class="popup__content"></div>').appendTo( $popup_inner ),

        $popup_title = $('<h5></h5>').appendTo( $popup_top );

    function close() {
        $popup_wrap.addClass('visuallyhidden');
        $popup_content.empty();
    }

    function open() {
        $popup_wrap.removeClass('visuallyhidden');
    }

    function updatePopupContent( htmlcontent, popuptitle ) {
        if( !popuptitle ) popuptitle = '';

        $popup_title.text( popuptitle );
        $popup_content.html( htmlcontent );
    }

    function bindEvents() {
        // Open popup on every popup link
        $('body').on('click', '[data-popup]', function(e) {
            var $this = $(this),
                $elOnPage = $( $this.attr('href') );

            // Als het om een element op de pagina gaat, bijv #element
            if( $elOnPage.length > 0 ) {
                updatePopupContent( $elOnPage.html(), $this.attr('title') );
                open();
            }
            else {
                // Url met ajax ophalen
                $.ajax({
                    url: $this.attr('href')
                }).done(function( data ) {
                    updatePopupContent( data, $this.attr('title') );
                    open();
                });
            }

            e.preventDefault();
        });

        // Met sluitknop popup sluiten
        $popup_inner.on('click', '.popup__close', close);

        // Met esape popup sluiten
        $(document).keyup(function(e) {
            // Escape
            if( e.keyCode == 27 ) { close(); }
        });
    }

    function init() {
        $('<span class="popup__close">Close</span>').appendTo( $popup_top );
        $popup_wrap.appendTo('body');

        bindEvents();
    }

    init();

    return {
        //open: open
    };
})( window );
