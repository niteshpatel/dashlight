//noinspection JSUnusedAssignment
dashlight.widgets = (function (module) {

    module.build_status = (function () {
        var build = function (content) {
            var latest = content[0];
            return $("<div></div>").text(latest.branch + " build " + latest.state + " at " + latest.finished_at + " in " + latest.duration + " seconds");
        };

        return {
            build: build
        }
    }());

    return module;

}(dashlight.widgets || {}));
