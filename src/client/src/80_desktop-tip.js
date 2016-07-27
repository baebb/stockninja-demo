/**
 * This object is here to manage the tip created for a company name or code
 * @param $element Jquery element on which we add the tip
 * @param company the company object
 */
var DesktopTip = function($element, company) {
    BaseDataLoader.call(this, $element, company, SN.templates['desktop-tip']);

    var thus = this;

    // Init the tip
    $element.tooltipster({
        interactive: true,
        speed: 0,
        //autoClose: false,
        position: "mouse-top",
        offsetY: 10,
        contentCloning: false,
        content: thus.$content,
        // Before showing the tip
        functionBefore: function(origin, continueTooltip) {
            // We always reload the data to get the latest values
            thus.loadData();
            thus.updateGraph();
            continueTooltip();
        }
    });
};

// Inheritance
DesktopTip.prototype = Object.create(BaseDataLoader.prototype);
DesktopTip.prototype.constructor = DesktopTip;