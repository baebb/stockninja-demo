this["SN"] = this["SN"] || {};
this["SN"]["templates"] = this["SN"]["templates"] || {};

this["SN"]["templates"]["desktop-tip"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "<div class=\"sn-desktop-tip\">\n<div class=\"sn-title\">\n<div class=\"sn-firstRow\">\n<div class=\"sn-stockCode\">\n"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.Symbol : stack1), depth0))
    + "\n</div>\n<div class=\"sn-stockPrice\">\n<span class=\"sn-dollarSign\">$</span> <span class=\"sn-value-current\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/>\n</div>\n</div>\n<div class=\"sn-secondRow\">\n<div class=\"sn-stockName\">\n"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.Name : stack1), depth0))
    + "\n</div>\n<div class=\"sn-stockChange\">\n<span class=\"sn-value-up sn-hidden\"><svg class=\"sn-icon\" viewBox=\"0 0 100 100\"><use xlink:href=\"#snicon-arrow-up\"/></svg></span>\n<span class=\"sn-value-down sn-hidden\"><svg class=\"sn-icon sn-rotate-180\" viewBox=\"0 0 100 100\"><use xlink:href=\"#snicon-arrow-up\"/></svg></span>\n<span class=\"sn-absolute-change\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span>\n(<span class=\"sn-percentage-change\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span>%)\n</div>\n</div>\n</div>\n\n<div class=\"sn-content\">\n<div class=\"sn-graph\">\n<img class=\"graph\" src=\"https://api.indx.guru/api/v1/external/company/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.Id : stack1), depth0))
    + "/chart?width=300\" alt=\"chart\"/>\n</div>\n<div class=\"sn-rightBlock\">\n<div class=\"sn-color-block sn-sentiment\">\nSENTIMENT\n<div class=\"sn-sideButtonValue\"><span class=\"sn-value-sentiment\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span> <span class=\"sn-percentage\">%</span></div>\n</div>\n<div class=\"sn-color-block sn-heat\">\nHEAT\n<div class=\"sn-sideButtonValue\"><span class=\"sn-value-heat\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span> <span class=\"sn-percentage\">%</span></div>\n</div>\n<div class=\"sn-sidebarBox\">\nMKT CAP\n<div class=\"sn-sidebarValue\"><span class=\"sn-market-cap\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span></div>\n</div>\n\n<div class=\"sn-sidebarBox\">\np/e ratio\n<div class=\"sn-sidebarValue\"><span class=\"sn-pe-ratio\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span></div>\n</div>\n\n<div class=\"sn-sidebarBox\">\ndiv yield\n<div class=\"sn-sidebarValue\"><span class=\"sn-dividend-yield\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span> %</div>\n</div>\n\n<div class=\"sn-sidebarBox\">\nOpen\n<div class=\"sn-sidebarValue\">$ <span class=\"sn-value-open\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span></div>\n</div>\n\n<div class=\"sn-sidebarBox\">\nhigh\n<div class=\"sn-sidebarValue\">$ <span class=\"sn-value-high\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span></div>\n</div>\n\n<div class=\"sn-sidebarBox\">\nlow\n<div class=\"sn-sidebarValue\">$ <span class=\"sn-value-low\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span></div>\n</div>\n</div>\n</div>\n<div class=\"sn-index-guru-link\">VIEW ON INDX.GURU</div>\n<div class=\"sn-insert-link\">\n<svg class=\"sn-icon\" viewBox=\"0 0 100 100\"><use xlink:href=\"#snicon-file-text-o\"/></svg>\nInsert into text\n<svg class=\"sn-icon\" viewBox=\"0 0 100 100\"><use xlink:href=\"#snicon-file-text-o\"/></svg>\n</div>\n</div>\n";
},"useData":true});

this["SN"]["templates"]["mobile-content"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "<div class=\"sn-mobile-content\">\n<div class=\"sn-title\">\n<div class=\"sn-firstRow\">\n<div class=\"sn-stockCode\">\n"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.Symbol : stack1), depth0))
    + "\n</div>\n<div class=\"sn-stockPrice\">\n<span class=\"sn-dollarSign\">$</span> <span class=\"sn-value-current\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/>\n</div>\n</div>\n<div class=\"sn-secondRow\">\n\n<div class=\"sn-stockName\">\n"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.Name : stack1), depth0))
    + "\n</div>\n\n<div class=\"sn-stockChange\">\n<div class=\"sn-absolute-change-container\">\n<span class=\"sn-value-up sn-hidden\"><svg class=\"sn-icon\" viewBox=\"0 0 100 100\"><use xlink:href=\"#snicon-arrow-up\"/></svg></span>\n<span class=\"sn-value-down sn-hidden\"><svg class=\"sn-icon sn-rotate-180\" viewBox=\"0 0 100 100\"><use xlink:href=\"#snicon-arrow-down\"/></svg></span>\n<span class=\"sn-absolute-change\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span>\n</div>\n<div class=\"sn-percentage-change-container\">\n<span class=\"sn-percentage-change\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span>\n<span class=\"sn-percentage\">%</span>\n</div>\n</div>\n\n</div>\n\n</div>\n\n<div class=\"sn-content\">\n<div class=\"sn-graph\">\n<span class=\"sn-graph-branding\">INSIGHTS BY <img src=\""
    + alias2(((helper = (helper = helpers.guruIndxLogoUrl || (depth0 != null ? depth0.guruIndxLogoUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"guruIndxLogoUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\"INDX.GURU\"></span>\n<img class=\"graph\" src=\"https://api.indx.guru/api/v1/external/company/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.Id : stack1), depth0))
    + "/chart?width=300\" alt=\"chart\"/>\n</div>\n\n<div class=\"sn-data-panels\">\n\n<div class=\"sn-leftBlock\">\n<div class=\"sn-color-block sn-heat\">\n<span class=\"sn-color-block-label\">\nHEAT\n</span>\n<div class=\"sn-sideButtonValue\"><span class=\"sn-value-heat\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span> <span class=\"sn-percentage\">%</span></div>\n</div>\n<div class=\"sn-sidebarBox\">\nOpen\n<div class=\"sn-sidebarValue\">$ <span class=\"sn-value-open\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span></div>\n</div>\n\n<div class=\"sn-sidebarBox\">\nhigh\n<div class=\"sn-sidebarValue\">$ <span class=\"sn-value-high\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span></div>\n</div>\n\n<div class=\"sn-sidebarBox\">\nlow\n<div class=\"sn-sidebarValue\">$ <span class=\"sn-value-low\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span></div>\n</div>\n\n</div>\n\n\n<div class=\"sn-rightBlock\">\n<div class=\"sn-color-block sn-sentiment\">\n<span class=\"sn-color-block-label\">\nSENTIMENT\n</span>\n<div class=\"sn-sideButtonValue\"><span class=\"sn-value-sentiment\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span> <span class=\"sn-percentage\">%</span></div>\n</div>\n<div class=\"sn-sidebarBox\">\nMKT CAP\n<div class=\"sn-sidebarValue\"><span class=\"sn-market-cap\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span></div>\n</div>\n\n<div class=\"sn-sidebarBox\">\np/e ratio\n<div class=\"sn-sidebarValue\"><span class=\"sn-pe-ratio\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span></div>\n</div>\n\n<div class=\"sn-sidebarBox\">\ndiv yield\n<div class=\"sn-sidebarValue\"><span class=\"sn-dividend-yield\"><img src=\""
    + alias2(((helper = (helper = helpers.loadingGifUrl || (depth0 != null ? depth0.loadingGifUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"loadingGifUrl","hash":{},"data":data}) : helper)))
    + "\"/></span> %</div>\n</div>\n</div>\n\n</div>\n\n\n</div>\n\n<div class=\"sn-footer\">\n<div class=\"sn-index-guru-link\">VIEW ON INDX.GURU</div>\n<div class=\"sn-insert-link\">\n<svg class=\"sn-icon\" viewBox=\"0 0 100 100\"><use xlink:href=\"#snicon-file-text-o\"/></svg>\nInsert into text\n<svg class=\"sn-icon\" viewBox=\"0 0 100 100\"><use xlink:href=\"#snicon-file-text-o\"/></svg>\n</div>\n</div>\n</div>\n";
},"useData":true});

this["SN"]["templates"]["mobile-panel"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"sn-handle\">\n<div class=\"sn-mini-button\">\n<svg class=\"sn-icon\" viewBox=\"0 0 100 100\">\n<use xlink:href=\"#icon-hear\" />\n</svg>\n</div>\n<div class=\"sn-slide-back\">\n<svg class=\"sn-icon\" viewBox=\"0 0 100 100\">\n<use xlink:href=\"#snicon-close\" />\n</svg>\n</div>\n</div>\n<div id=\"sn-mobile-faded-background\"></div>\n\n<div id=\"sn-mobile-panel-wrapper\">\n<div id=\"sn-mobile-panel\"></div>\n</div>\n";
},"useData":true});