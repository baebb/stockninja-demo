/**
 * This object is here to manage the tip created for a company name or code
 * @param $element Jquery element on which we add the tip
 * @param company the company object
 */
var BaseDataLoader = function($element, company, template, loadingGifUrl, guruIndxLogoUrl) {
    // Save the company data in the tip
    this.company = company;

    // Create the element to put in the tip as content
    this.$content = $(template({
        company: company,
        loadingGifUrl: loadingGifUrl || SN.loadingGifUrl,
        guruIndxLogoUrl: guruIndxLogoUrl || SN.guruIndxLogoUrl
    }));

    var thus = this;

    this.$content.find('.sn-insert-link').on('click', function() {
        var $insert = $('<div class="sn-desktop-insert"></div>');
        $insert.append(thus.$content.clone());
        $element.after($insert);
    })
};

/**
 * Load the data for the tip
 */
BaseDataLoader.prototype.loadData = function() {
    var thus = this;
    // Get the company info and display them
    StockninjaAPI.getCompanyInfo(this.company['Id']).done(function(data) {
        var $content = thus.$content;
        // Save and display the quotes of the company
        thus.company.Quote = data.Quote;
        $content.find(".sn-value-current").text(data.Quote['Last']);
        $content.find(".sn-value-open").text(data.Quote['Open']);
        $content.find(".sn-value-low").text(data.Quote['Low']);
        $content.find(".sn-value-high").text(data.Quote['High']);
        $content.find(".sn-absolute-change").text(data.Quote['AbsoluteChange']);
        $content.find(".sn-percentage-change").text(data.Quote['PercentageChange']);

        // Change color and icon depending if there is an increase or a decrease
        if(data.Quote['AbsoluteChange'] > 0.0) {
            $content.find(".sn-stockChange").removeClass("sn-decrease").addClass("sn-increase");
            $content.find(".sn-value-up").removeClass("sn-hidden");
        } else if(data.Quote['AbsoluteChange'] < 0.0) {
            $content.find(".sn-stockChange").addClass("sn-decrease").removeClass("sn-increase");
            $content.find(".sn-value-down").removeClass("sn-hidden");
        }

        // Save and display the Metrics of the stock
        thus.company.Metrics = data.Metrics;
        $content.find(".sn-dividend-yield").text(data.Metrics['DividendYieldFiscal'] ? data.Metrics['DividendYieldFiscal'].toFixed(2) : '--');
        $content.find(".sn-pe-ratio").text(data.Metrics['PERatio'] ? data.Metrics['PERatio'].toFixed(2) : '--');
        $content.find(".sn-market-cap").text(data.Metrics['MarketCapitalization'] ? stringifyNumberWithSuffix(data.Metrics['MarketCapitalization'], 2) : '--');
        $content.find(".sn-value-heat").text(data.Metrics['Heat'] ? data.Metrics['Heat'].toFixed(0) : '--');
        $content.find(".sn-value-sentiment").text(data.Metrics['Sentiment'] ? data.Metrics['Sentiment'].toFixed(0) : '--');
    });
};

/**
 * Update the graph picture
 */
BaseDataLoader.prototype.updateGraph = function() {
    var img = this.$content.find("img.graph");
    img.attr("src","https://api.indx.guru/api/v1/external/company/"+this.company['Id']+"/chart?width=300&" + new Date().getTime())
};
