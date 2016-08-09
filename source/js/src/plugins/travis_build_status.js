//noinspection JSUnusedAssignment
dashlight.plugins = (function (module) {

    module.travis_build_status = (function () {
        var processResponse = function (content, options) {
            var build,
                duration,
                startTime,
                finishTime,
                branch;

            build = content.builds[0];
            branch = content.commits[0].branch;
            duration = moment.duration(build.duration);
            startTime = moment(build.started_at);
            finishTime = moment(build.finished_at);

            return {
                project: options.project,
                build: options.build,
                branch: branch,
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
