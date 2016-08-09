//noinspection JSUnusedAssignment
dashlight.plugins = (function (module) {

    module.travis_build_status = (function () {
        var processResponse = function (content, options) {
            var build,
                duration,
                startTime,
                finishTime;

            build = content[0];
            duration = moment.duration(build.duration);
            startTime = moment(build.started_at);
            finishTime = moment(build.finished_at);

            return {
                project: options.project,
                build: options.build,
                branch: build.branch,
                state: build.state,
                duration: duration,
                startTime: startTime,
                finishTime: finishTime
            }
        };

        return {
            processResponse: processResponse
        }
    }());

    return module;

}(dashlight.plugins || {}));
