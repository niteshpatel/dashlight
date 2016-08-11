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
            options: {
                host: "https://api.travis-ci.org",
                repository_id: "niteshpatel/dashlight",
                build: "BnD"
            }
        },
        {
            name: "yahooquotes_provider",
            widget: "stock_prices",
            plugin: "yql_stock_prices",
            options: {
                symbols: ["RBS.L", "AAPL", "GOOG"]
            }
        }
    ]
);
