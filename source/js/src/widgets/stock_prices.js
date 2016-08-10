//noinspection JSUnusedAssignment
dashlight.widgets = (function (module) {

    module.stock_prices = (function () {
        var build,
            element,
            changeClass;

        build = function (content) {
            element = $("<div>").addClass("widget");
            element.append($("<span>").addClass("prefix").text("STOCKS "));

            for (var i = 0; i < content.length; i++) {
                changeClass = content[i].change.indexOf("-") > -1
                    ? "loss"
                    : "gain";

                element.append($("<strong>").html(content[i].symbol + " "))
                    .append($("<span>").html(" (" + content[i].name + ") "))
                    .append($("<strong>").html(content[i].price + " "))
                    .append($("<strong>").addClass(changeClass).html(content[i].change))
                    .append($("<span>").addClass(changeClass).html(" (" + content[i].percentChange + ") "));

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
