var Yeah = Yeah || {};

/**
 * Popup regelen
 */
(function() {
    var $popup_wrap = $('<div class="popup--overlay"></div>').addClass('visuallyhidden'),
        $popup_inner = $('<div class="popup--inner"></div>').appendTo( $popup_wrap ),
        $popup_top = $('<div class="popup--top"></div>').appendTo( $popup_inner ),
        $popup_content = $('<div class="popup--content"></div>').appendTo( $popup_inner ),

        $popup_title = $('<h5></h5>').appendTo( $popup_top );

    $('<span class="popup--close">Close</div>').appendTo( $popup_top );

    $popup_wrap.appendTo('body');

    // Update popup content
    Yeah.update_popup_content = function( htmlcontent, popuptitle ) {
        if( !popuptitle ) popuptitle = '';

        $popup_title.text(popuptitle);
        $popup_content.html( htmlcontent );
    }

    // Open popup
    Yeah.open_popup = function() {
        $popup_wrap.removeClass('visuallyhidden');
    }

    // Close popup
    Yeah.close_popup = function() {
        $popup_wrap.addClass('visuallyhidden');
        $popup_content.empty();
    }

    // Open popup on every popup link
    $('body').on('click', '.popup', function(e) {
        var $this = $(this);

        // Url met ajax ophalen
        $.ajax({
            url: $this.attr('href')
        }).done(function( data ) {
            Yeah.update_popup_content( data, $this.attr('title') );
            Yeah.open_popup();
        });

        e.preventDefault();
    });

    $popup_inner.on('click', '.popup--close', Yeah.close_popup);
})();