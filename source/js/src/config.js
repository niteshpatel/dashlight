//noinspection JSUnusedAssignment
var dashlight = (function (module) {
    module.config = {
        providersUrl: "samples/providers.js",
        widgetUrls: [
            "js/src/widgets/one_line.js",
            "js/src/widgets/build_status.js",
            "js/src/widgets/stock_prices.js"
        ],
        pluginUrls: [
            "js/src/plugins/travis_build_status.js",
            "js/src/plugins/yql_stock_prices.js"
        ]
    };

    return module;

}(dashlight));
