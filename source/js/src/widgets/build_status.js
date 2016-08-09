//noinspection JSUnusedAssignment
dashlight.widgets = (function (module) {

    module.build_status = (function () {
        var build = function (content) {
            var text;
            var textDuration;
            var minutes;

            text = content.project + " :: " + content.build + " > "
                + content.state + " build for [" + content.branch + "]";

            if (content.startTime.isValid()) {
                text = text
                    + "; started at " + content.startTime.format("DD MMM YYYY HH:mm:ss");
            }

            if (!!content.finishTime.isValid()) {
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
