//noinspection JSUnusedAssignment
dashlight.widgets = (function (module) {

    module.one_line = (function () {
        var build = function (content) {
            return $("<div></div>").text(content.text);
        };

        return {
            build: build
        }
    }());

    return module;

}(dashlight.widgets || {}));
