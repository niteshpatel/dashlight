//noinspection JSUnusedAssignment
dashlight.plugins = (function (module) {

    module.iex_stock_prices = (function () {
        var processRequest = function (provider) {
            var url;

            url = "https://api.iextrading.com/1.0/stock/market/batch?types=quote&displayPercent=true&symbols="
                + provider.options.symbols.join(',');

            return {
                url: url,
                jsonp: true
            }
        };

        var processResponse = function (content) {
            var quote,
                processed;

            processed = [];
            for (var item in content) {
                if (content.hasOwnProperty(item)) {
                    quote = content[item].quote;
                    processed.push({
                        symbol: quote.symbol,
                        name: quote.companyName,
                        price: String(quote.latestPrice),
                        change: String(quote.change),
                        percentChange: String(quote.changePercent)
                    });
                }
            }

            return processed;
        };

        return {
            processRequest: processRequest,
            processResponse: processResponse
        }
    }());

    return module;

}(dashlight.plugins || {}));
