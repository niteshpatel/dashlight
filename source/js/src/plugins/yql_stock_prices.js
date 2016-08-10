//noinspection JSUnusedAssignment
dashlight.plugins = (function (module) {

    module.yql_stock_prices = (function () {
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
                    changeInPercent: quotes[i].ChangeinPercent
                });
            }

            return processed;
        };

        return {
            processResponse: processResponse
        }
    }());

    return module;

}(dashlight.plugins || {}));
