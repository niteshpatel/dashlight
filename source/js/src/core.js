//noinspection JSUnusedAssignment
var dashlight = (function (module) {

    var init = function (container) {
        dashlight.container = container;
        //noinspection JSUnresolvedFunction

        // http://stackoverflow.com/a/23058528
        getScripts(module.config.widgetUrls, function () {
            getScripts(module.config.pluginUrls, function () {
                loadProviders();
            })
        });
    };

    var getScripts = function (scripts, callback) {
        var progress = 0;
        var internalCallback = function () {
            if (++progress == scripts.length) {
                callback();
            }
        };

        scripts.forEach(function (script) {
            $.getScript(script, internalCallback);
        });
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
            url,
            headers,
            plugin,
            requestOptions,
            settings;


        successCallBackFactory = function (index) {
            var p = providers[index];
            return function (content) {
                render(p.widget, p.name, p.plugin, p.options, content)
            }
        };

        for (var i = 0; i < providers.length; i++) {
            provider = providers[i];

            url = provider.url;
            headers = provider.headers;
            jsonp = provider.jsonp;

            plugin = dashlight.plugins[provider.plugin];
            if (plugin && plugin.processRequest) {
                requestOptions = plugin.processRequest(provider);
                url = requestOptions.url;
                headers = requestOptions.headers;
                jsonp = requestOptions.jsonp;
            }

            settings = {
                url: url,
                headers: headers,
                success: successCallBackFactory(i)
            };

            if (jsonp) {
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
