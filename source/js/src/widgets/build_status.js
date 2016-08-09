//noinspection JSUnusedAssignment
dashlight.widgets = (function (module) {

    module.build_status = (function () {
        var build = function (content) {
            var text;
            var textDuration;
            var minutes;

            text = content.branch + " build"
                + " is " + content.state;

            if (!!content.startTime) {
                text = text
                    + "; started at " + content.startTime.format("DD MMM YYYY HH:mm:ss");
            }

            if (!!content.finishTime) {
                minutes = content.duration.minutes();
                textDuration = content.duration.seconds() + "s";
                if (minutes > 0) {
                    textDuration = minutes + "m:" + textDuration;
                }

                text = text
                    + "; finished at " + content.finishTime.format("DD MMM YYYY HH:mm:ss")
                    + " (" + textDuration + ")";
            }

            return $("<div></div>").text(text);
        };

        return {
            build: build
        }
    }());

    return module;

}(dashlight.widgets || {}));
