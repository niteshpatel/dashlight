/* global beforeEach, describe, it, expect */
//noinspection JSUnusedAssignment
Object.toEqual = Object.toEqual || null;

describe("dashlight", function () {

    it("has a config object", function () {
        expect(dashlight.hasOwnProperty("config")).toEqual(true);
    });

    describe("config", function () {

        it("has the 'samples/providers.js' url set as the providersUrl", function () {
            expect(dashlight.config.providersUrl).toEqual("samples/providers.js");
        });

        it("has the expected widgets in the list of widget urls", function () {
            expect(dashlight.config.widgetUrls)
                .toEqual([
                    "js/src/widgets/one_line.js",
                    "js/src/widgets/build_status.js",
                    'js/src/widgets/stock_prices.js'
                ]);
        });

        it("has the expected plugins in the list of plugin urls", function () {
            expect(dashlight.config.pluginUrls)
                .toEqual([
                    "js/src/plugins/travis_build_status.js",
                    "js/src/plugins/iex_stock_prices.js"
                ]);
        });
    });

    describe("after init", function () {

        var renderSpy;

        beforeEach(function (done) {
            renderSpy = initAndWaitUntilRenderedAndReturnRenderSpy(done);
        }, 15000);

        it("has the expected widgets loaded", function () {
            expect(Object.keys(dashlight.widgets)).toEqual([
                "one_line",
                "build_status",
                "stock_prices"
            ]);
        });

        it("has the expected plugin loaded", function () {
            expect(Object.keys(dashlight.plugins)).toEqual([
                "travis_build_status",
                "iex_stock_prices"
            ]);
        });

        it("has the expected providers rendered", function () {
            var allArgs = renderSpy.calls.allArgs();
            expect(allArgs.length).toEqual(3);

            expect(allArgs).toContain(["helloworld_provider"]);
            expect(allArgs).toContain(["iexquotes_provider"]);
            expect(allArgs).toContain(["travis_dashlight_provider"]);
        });

        it("container contains the text 'Hello, World!'", function () {
            expect(dashlight.container.text())
                .toContain('Hello, world!');
        });

        it("container contains the text 'build is finishing|running'", function () {
            expect(dashlight.container.text())
                .toMatch('dashlight :: BnD > (started|running|passed|failed|finished) \\[master\\];');
        });

        it("container contains the expected quote symbols", function () {
            expect(dashlight.container.text())
                .toContain('AAPL');
            expect(dashlight.container.text())
                .toContain('GOOG');
        });
    });
});
