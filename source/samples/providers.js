//noinspection JSUnresolvedFunction
callback(
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
            url: "http://api.travis-ci.org/repos/niteshpatel/dashlight/builds",
            headers: {
                "Accept": "application/vnd.travis-ci.2+json"
            },
            options: {
                project: "dashlight",
                build: "Build and Deploy"
            }
        }
    ]
);
