//noinspection JSUnusedAssignment
dashlight.plugins = (function (module) {

    module.yql_stock_prices = (function () {
        var processRequest = function (provider) {
            var url;

            url = "https://query.yahooapis.com/v1/public/yql?q="
                + encodeURIComponent(
                    "select * from yahoo.finance.quotes where symbol in "
                    + '("' + provider.options.symbols.join('","') + '")'
                )
                + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="
                + provider.name;

            return {
                url: url,
                jsonp: true
            }
        };

        var processResponse = function (content) {
            var quotes,
                processed;

            quotes = content.query.results.quote;
            if (!Array.isArray(quotes)) {
                quotes = [quotes];
            }

            processed = [];
            for (var i = 0; i < quotes.length; i++) {
                processed.push({
                    symbol: quotes[i].symbol,
                    name: quotes[i].Name,
                    price: quotes[i].LastTradePriceOnly,
                    change: quotes[i].Change,
                    percentChange: quotes[i].PercentChange
                });
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
