/**
 * This object is here to manage the tip created for a company name or code
 * @param $element Jquery element on which we add the tip
 * @param company the company object
 */
var MobileContent = function($element, company) {
    BaseDataLoader.call(this, $element, company, SN.templates["mobile-content"]);

    var thus = this;

    // On click on the element we generate and insert the view in the mobile panel
    $element.click(function() {
        thus.loadData();
        thus.updateGraph();
        MobilePanel.display(thus.$content);
    })
};

// Inheritance
MobileContent.prototype = Object.create(BaseDataLoader.prototype);
MobileContent.prototype.constructor = MobileContent;