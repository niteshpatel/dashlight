//noinspection JSUnusedAssignment
dashlight.widgets = (function (module) {

    module.one_line = (function () {
        var build;

        build = function (content) {
            element = $("<div>")
                .addClass("widget")
                .append($("<span>").text(content.text));

            return element;
        };

        return {
            build: build
        }
    }());

    return module;

}(dashlight.widgets || {}));
