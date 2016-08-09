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
        return loadItems(module.config.widgetUrls);
    };

    var loadPlugins = function () {
        return loadItems(module.config.pluginUrls);
    };

    var loadItems = function (items) {
        var deferred = $.Deferred();

        var loadItem = function (itemId) {
            if (itemId < items.length) {
                $.getScript(items[itemId], function () {
                    loadItem(++itemId)
                });
            }
            else {
                //noinspection JSUnresolvedFunction
                deferred.resolve();
            }
        };
        loadItem(0);

        return deferred;
    };

    var loadProviders = function () {
        $.ajax({
            url: module.config.providersUrl,
            dataType: "jsonp",
            jsonpCallback: "_handleProviders",
            success: handleProviders
        });
    };

    var handleProviders = function (providers) {
        var successCallBackFactory,
            provider,
            settings;

        successCallBackFactory = function (index) {
            var p = providers[index];
            return function (content) {
                render(p.widget, p.name, p.plugin, p.options, content)
            }
        };

        for (var i = 0; i < providers.length; i++) {
            provider = providers[i];

            settings = {
                url: provider.url,
                headers: provider.headers,
                success: successCallBackFactory(i)
            };

            if (provider.jsonp) {
                settings.dataType = "jsonp";
                settings.jsonpCallback = provider.name;
            }

            $.ajax(settings);
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
