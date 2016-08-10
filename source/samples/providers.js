//noinspection JSUnresolvedFunction
_handleProviders(
    [
        {
            name: "helloworld_provider",
            widget: "one_line",
            url: "samples/providers/helloworld.js",
            jsonp: true
        },
        {
            name: "travis_dashlight_provider",
            widget: "build_status",
            plugin: "travis_build_status",
            url: "https://api.travis-ci.org/repos/niteshpatel/dashlight/builds",
            headers: {
                "Accept": "application/vnd.travis-ci.2+json"
            },
            options: {
                project: "dashlight",
                build: "BnD"
            }
        },
        {
            name: "yahooquotes_provider",
            widget: "stock_prices",
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22RBS.L%22%2C%22GOOG%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=yahooquotes_provider",
            jsonp: true,
            plugin: "yql_stock_prices"
        }
    ]
);
