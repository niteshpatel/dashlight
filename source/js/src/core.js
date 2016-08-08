//noinspection JSUnusedAssignment
var dashlight = (function (module) {

    var init = function (container) {
        dashlight.container = container;
        //noinspection JSUnresolvedFunction
        loadWidgets()
            .done(loadProviders());
    };

    var loadWidgets = function () {
        var deferred = $.Deferred();

        var loadWidget = function (widgetId) {
            if (widgetId < module.config.widgetUrls.length) {
                $.getScript(module.config.widgetUrls[widgetId], function () {
                    loadWidget(++widgetId)
                });
            }
            else {
                //noinspection JSUnresolvedFunction
                deferred.resolve();
            }
        };
        loadWidget(0);

        return deferred;
    };

    var loadProviders = function () {
        $.ajax({
            url: module.config.providersUrl,
            dataType: "jsonp",
            jsonpCallback: "callback",
            success: handleProviders
        });
    };

    var handleProviders = function (providers) {
        for (var i = 0; i < providers.length; i++) {
            $.ajax({
                url: providers[i].url,
                dataType: "jsonp",
                jsonpCallback: "callback",
                success: (function () {
                    var p = providers[i];
                    return function (content) {
                        render(p.widget, p.name, content)
                    }
                }())
            });
        }
    };

    var render = function (widget, name, content) {
        dashlight.container.append(
            dashlight.widgets[widget].build(content));

        dashlight.notifyRendered(name);
    };


    var notifyRendered = function () {
    };

    module.init = init;
    module.notifyRendered = notifyRendered;

    return module;

}(dashlight || {}));
