//noinspection JSUnusedAssignment
dashlight.plugins = (function (module) {

    module.travis_build_status = (function () {
        var processResponse = function (content) {
            var build,
                duration,
                state,
                branch,
                startTime,
                finishTime;

            build = content[0];
            branch = build.branch;
            state = build.state;
            duration = moment.duration(build.duration);
            startTime = moment(build.started_at);
            finishTime = moment(build.finished_at);

            return {
                branch: branch,
                state: state,
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
