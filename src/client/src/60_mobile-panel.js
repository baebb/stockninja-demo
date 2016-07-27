/**
 * This is the panel for the mobile version
 */
var MobilePanel = function(){
    /**
     * Data containing the artist and the index of the current played song
     */
    var $panelWrapper, $panel, $handle, $fadedBackground;
    // The width of the widow cannot change on mobile
    var windowWidth = $(window).outerWidth();

    // Init DOM and events
    var init = function() {
        // Create and add template to the DOM
        $body.append(SN.templates['mobile-panel']());

        // DOM elements

        $handle = $('#sn-handle');

        $fadedBackground = $('#sn-mobile-faded-background');

        $panelWrapper = $('#sn-mobile-panel-wrapper');
        $panel = $panelWrapper.find('#sn-mobile-panel');

        // Hide the wrapper at the beginning
        $panelWrapper.css('left', windowWidth);

        /////////////////////////////
        // --- Add event handlers ---
        /////////////////////////////

        // Where the slide started
        var leftOffset = 0;
        var onTouchMove = function(e) {
            // Prevent the handle to be put out of the screen
            var position = Math.max(0, e.originalEvent.touches[0].pageX - leftOffset);
            position = Math.min(position, windowWidth-$handle.outerWidth());
            // Position the handle
            $handle.css('left', position);
            // Position the panel
            $panelWrapper.css('left', position+$handle.outerWidth());
            // Resize the wrapper to show only the visible part
            $panelWrapper.width(windowWidth-position-$handle.outerWidth());
            e.stopPropagation();
        };

        // When the user touches the handle
        $handle.on('touchstart', function(e){
            leftOffset = e.originalEvent.touches[0].pageX - parseInt($handle.css('left'));
            $handle.on('touchmove', onTouchMove);
        });

        // When the user finishes the touch
        $handle.on('touchend', function(e){
            $handle.off('touchmove', onTouchMove);

            // Position in % where the handle has been released
            var ratioPosition = parseInt($panelWrapper.css('left'))/windowWidth;

            // If the handle has been released around the right of the screen
            // We close the panel
            if(ratioPosition > 0.5) {
                hide();
            }
            // Else we open the panel
            else {
                show();
            }
        });

        // When the user touche the handle
        $handle.on('click', function(){
            // If the panel is hidden
            if($panelWrapper.outerWidth() == 0) {
                show();
            } else {
                hide();
            }
        });
    };

    // DOM actions
    var show = function() {
        $body.addClass('snModalOpen');
        $handle.animate({left: 0}, {
            duration: 100,
            queue: false,
            complete: function() {
                $handle.addClass("sn-handle-open").removeClass("sn-handle-closed");
            }
        });
        $panelWrapper.animate({left: $handle.outerWidth(), width:windowWidth-$handle.outerWidth()}, {duration: 100, queue: false});
        $fadedBackground.show();
    };
    var hide = function() {
        $body.removeClass('snModalOpen');
        $handle.animate({left: windowWidth - $handle.outerWidth()}, {
            duration: 100,
            queue: false,
            complete: function() {
                $handle.removeClass("sn-handle-open").addClass("sn-handle-closed");
            }
        });
        $panelWrapper.animate({left: windowWidth, width:0}, {duration: 100, queue: false});
        $fadedBackground.hide();
    };

    // Public player object
    return {

        /**
         * Call the init method (To do after the load of the page)
         */
        init: init,

        /**
         * Display the panel with specific content
         * @param $content Content to display in the panel
         */
        display: function ($content) {
            $panel.html($content);
            $handle.show();
            show();
        },

        // Player methods that we expose
        show: show,
        hide: hide
    }
}();
