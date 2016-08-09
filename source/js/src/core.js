//noinspection JSUnusedAssignment
var dashlight = (function (module) {

    var init = function (container) {
        dashlight.container = container;
        //noinspection JSUnresolvedFunction
        loadWidgets()
            .done(loadPlugins())
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

    var loadPlugins = function () {
        var deferred = $.Deferred();

        var loadPlugin = function (pluginId) {
            if (pluginId < module.config.pluginUrls.length) {
                $.getScript(module.config.pluginUrls[pluginId], function () {
                    loadPlugin(++pluginId)
                });
            }
            else {
                //noinspection JSUnresolvedFunction
                deferred.resolve();
            }
        };
        loadPlugin(0);

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
        var successCallBackFactory = function (index) {
            var p = providers[index];
            return function (content) {
                render(p.widget, p.name, p.plugin, p.options, content)
            }
        };

        for (var i = 0; i < providers.length; i++) {
            $.ajax({
                url: providers[i].url,
                dataType: "jsonp",
                jsonpCallback: providers[i].name,
                success: successCallBackFactory(i)
            });
        }
    };

    var render = function (widgetName, name, pluginName, options, content) {
        var plugin = dashlight.plugins[pluginName];
        if (plugin && plugin.processResponse) {
            content = plugin.processResponse(content, options);
        }

        dashlight.container.append(
            dashlight.widgets[widgetName].build(content));

        dashlight.notifyRendered(name);
    };


    var notifyRendered = function () {
    };

    module.init = init;
    module.notifyRendered = notifyRendered;

    return module;

}(dashlight || {}));
