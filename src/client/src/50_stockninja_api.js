/**
 * This file hosts all the different method to call the Stockninja API
 */
var StockninjaAPI = {};

/**
 * Extract all the companies name and code from the text
 * @param text
 * @return promise
 */
StockninjaAPI.extract = function(text) {
    return $.ajax({
        url: SN.env.nodeBaseUrl+"/v0/client/extract",
        data: {
            text: text
        },
        dataType: "json",
        type: "POST"
    })
};

/**
 * Get the information about the company stock
 * @param companyId
 * @returns promise
 */
StockninjaAPI.getCompanyInfo = function(companyId) {
    return $.ajax({
        url: "https://api.indx.guru/api/v1/external/company/"+companyId,
        dataType: 'json',
        type: 'GET',
        cache: false
    })
};