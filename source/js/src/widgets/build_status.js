//noinspection JSUnusedAssignment
dashlight.widgets = (function (module) {

    module.build_status = (function () {
        var build = function (content) {
            var element,
                text,
                textDuration,
                minutes;

            text = content.project + " :: <strong>" + content.build + "</strong> &gt; "
                + "<strong class='" + content.state + "'>" + content.state + "</strong> "
                + "[<strong>" + content.branch + "</strong>]";

            if (content.finishTime.isValid()) {
                minutes = content.duration.minutes();
                textDuration = content.duration.seconds() + "s";
                if (minutes > 0) {
                    textDuration = minutes + "m:" + textDuration;
                }

                text = text
                    + "; finished " + content.finishTime.format("HH:mm DD-MMM-YYYY ")
                    + " (took " + textDuration + ")";
            }

            else if (content.startTime.isValid()) {
                text = text
                    + "; started " + content.startTime.format("HH:mm DD-MMM-YYYY ");
            }

            element = $("<div>").addClass("widget");
            element.append($("<span>").addClass("prefix").text("BUILD "));
            element.append($("<span>").html(text));

            return element;
        };

        return {
            build: build
        }
    }());

    return module;

}(dashlight.widgets || {}));
