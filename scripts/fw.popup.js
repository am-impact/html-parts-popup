var FW = FW || {};

/**
 * Popup regelen
 */
(function() {
    var $popup_wrap = $('<div class="popup__overlay"></div>').addClass('visuallyhidden'),
        $popup_inner = $('<div class="popup__inner"></div>').appendTo( $popup_wrap ),
        $popup_top = $('<div class="popup__top"></div>').appendTo( $popup_inner ),
        $popup_content = $('<div class="popup__content"></div>').appendTo( $popup_inner ),

        $popup_title = $('<h5></h5>').appendTo( $popup_top );

    $('<span class="popup__close">Close</span>').appendTo( $popup_top );

    $popup_wrap.appendTo('body');

    // Update popup content
    FW.update_popup_content = function( htmlcontent, popuptitle ) {
        if( !popuptitle ) popuptitle = '';

        $popup_title.text(popuptitle);
        $popup_content.html( htmlcontent );
    };

    // Open popup
    FW.open_popup = function() {
        $popup_wrap.removeClass('visuallyhidden');
    };

    // Close popup
    FW.close_popup = function() {
        $popup_wrap.addClass('visuallyhidden');
        $popup_content.empty();
    };

    // Open popup on every popup link
    $('body').on('click', '[data-popup]', function(e) {
        var $this = $(this),
            $elOnPage = $( $this.attr('href') );

        // Als het om een element op de pagina gaat, bijv #element
        if( $elOnPage.length > 0 ) {
            FW.update_popup_content( $elOnPage.html(), $this.attr('title') );
            FW.open_popup();
        }
        else {
            // Url met ajax ophalen
            $.ajax({
                url: $this.attr('href')
            }).done(function( data ) {
                FW.update_popup_content( data, $this.attr('title') );
                FW.open_popup();
            });
        }

        e.preventDefault();
    });

    // Met sluitknop popup sluiten
    $popup_inner.on('click', '.popup__close', FW.close_popup);

    // Met esape popup sluiten
    $(document).keyup(function(e) {
        // Escape
        if( e.keyCode == 27 ) { FW.close_popup(); }
    });
})();