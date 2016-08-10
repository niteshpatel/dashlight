//noinspection JSUnusedAssignment
dashlight.widgets = (function (module) {

    module.stock_prices = (function () {
        var build,
            element,
            changeClass;

        build = function (content) {
            element = $("<div>")
                .addClass("widget")
                .append($("<span>").addClass("prefix").text("STOCKS "));

            for (var i = 0; i < content.length; i++) {
                changeClass = content[i].changeInPercent.indexOf("-") > -1
                    ? "loss"
                    : "gain";

                element.append($("<strong>").html(content[i].symbol))
                    .append($("<span>").html(" (" + content[i].name + ") "))
                    .append($("<strong>").addClass(changeClass).html(content[i].changeInPercent));

                if (i < content.length - 1) {
                    element.append(" | ");
                }
            }
            return element;
        };

        return {
            build: build
        }
    }());

    return module;

}(dashlight.widgets || {}));
