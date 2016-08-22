//noinspection JSUnusedAssignment
dashlight.plugins = (function (module) {

    module.travis_build_status = (function () {
        var processRequest = function (provider) {
            var url,
                headers;

            url = provider.options.host
                + "/repos/"
                + provider.options.repository_id
                + "/builds";

            headers = {
                "Accept": "application/vnd.travis-ci.2+json"
            };

            return {
                url: url,
                headers: headers
            }
        };

        var processResponse = function (content, options) {
            var build,
                duration,
                startTime,
                finishTime,
                branch;

            build = content.builds[0];
            branch = content.commits[0].branch;
            duration = moment.duration(build.duration * 1000);
            startTime = moment(build.started_at);
            finishTime = moment(build.finished_at);

            return {
                project: options.repository_id,
                build: options.build,
                branch: branch,
                state: build.state,
                duration: duration,
                startTime: startTime,
                finishTime: finishTime
            }
        };

        return {
            processRequest: processRequest,
            processResponse: processResponse
        }
    }());

    return module;

}(dashlight.plugins || {}));
