/**
 * Stockninja engine that detect the artists and highlight them in the text
 * And add the tip on mouse hover
 * @type {{run}}
 */
var StockninjaEngine = (function(){
    var companies;

    /**
     * highlight the companies in the text
     * @param companyNamesAndCode Array containing all company names and code
     */
    var highlightCompanies = function(companies) {
        // Get only the keys (name and code)
        var companiesNameAndCode = $.map(companies, function(e,i){return i});

        /**
         * Wrap the names and codes with a span and add a data "match" containing the name highlighted
         */
        $(SN.selector).highlight(companiesNameAndCode, {
            caseSensitive: true,
            className: 'sn-match',
            wordsOnly: true,
            fullMatch: false
        });
    };

    /**
     * For each match not excluded, we attach the data of the artist to the node
     * and we create the icon + the Tip
     */
    var createTipForHighlightedCompanies = function() {
        var iconTemplate = ' <svg class="sn-icon" viewBox="0 0 100 100"><use xlink:href="#snicon-stats-dots"/></svg>';

        $(SN.selector).find('.sn-match').each(function(index, element) {
            var $element = $(element);
            var company = companies[$element.data('match')];

            // Append the icon
            $element.append(iconTemplate);

            if(SN.isMobile) {
                new MobileContent($element, company);
            } else {
                new DesktopTip($element, company);
            }
        });
    };

    /**
     * Take the text and highlight all artists name
     */
    var runEngine = function() {
        $('body noscript,body script').remove(); //they should already be processed

        // Get all the text that should be processed
        var text = "";
        $(SN.selector).each(function (index, element) {
            text += $(element).text() + " "; //var text = $(selector).text(); doesn't add whitespace between selected elements
        });
        text = text.replace(/\s+/g, ' ');

        // Extract companies from the text
        StockninjaAPI.extract(text)
            .done(function(data) {
                companies = data;

                highlightCompanies(companies);
                createTipForHighlightedCompanies();
            });
    };

    /**
     * Load Stockninja CSS dynamically
     */
    var loadCSS = function () {
        // Dynamically load Stockninja CSS.
        var css = document.createElement("link");
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("type", "text/css");
        css.setAttribute("href", SN.srcFolder.getFile("Stockninja.css"));
        document.getElementsByTagName("head")[0].appendChild(css);
    };

    var loadSVGs = function() {
        //get svgs
        $.get(SN.srcFolder.getFile('images/svgdefs.svg'), function (data) {
            var div = document.createElement("div");
            div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
            document.body.insertBefore(div, document.body.childNodes[0]);
        });
    };

    /**
     * Override the default SN variale with the values define in StockninjaOpts
     */
    var overrideDefaultVariables = function() {
        if (!window.StockninjaOpts) {
            StockninjaOpts = {};
        }
        if (StockninjaOpts.selector) {
            SN.selector = StockninjaOpts.selector;
            SN.fullMatch = typeof (StockninjaOpts.selectorFullMatch !== 'undefined') ? StockninjaOpts.selectorFullMatch : true;
        }
    };

    return {
        run : function() {
            loadCSS();
            loadSVGs();
            // If the current user is on mobile
            if(SN.isMobile) {
                MobilePanel.init();
            }
            overrideDefaultVariables();
            runEngine();
        }
    };
})();

console.log('Stockninja loading');
// run the engine
StockninjaEngine.run();




