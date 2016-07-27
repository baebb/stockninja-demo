// complement of 00jQuery.js

    // Close SoundninjaInit method
    }

    /**
     * Helper to load a script with a callback when done
     * @param url
     * @param callback
     */
    function loadScript(url, callback) {

        var script = document.createElement("script");
        script.type = "text/javascript";

        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function () {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }


    var startPlugin = function() {
        if (!window.jQuery) {
            loadScript("//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js", function () {
                var $jQuery = jQuery.noConflict(true);
                console.log('jQuery now loaded - version:', $jQuery.fn.jquery);
                StockninjaInit($jQuery);
            });
        } else {
            StockninjaInit(jQuery);
        }
    };

    window.onload = startPlugin;

    var inIframe = function() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    };

    if(inIframe()) {
        startPlugin();
    }

// Close loading jquery method
})();
