//noinspection JSUnusedAssignment
var dashlight = (function (module) {
    module.config = {
        providersUrl: "samples/providers.js",
        widgetUrls: [
            "js/src/widgets/one_line.js",
            "js/src/widgets/build_status.js"
        ],
        pluginUrls: [
            "js/src/plugins/travis_build_status.js"
        ]
    };

    return module;

}(dashlight));
