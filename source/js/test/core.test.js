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

        it("has the 'one_line' and 'build_status' widgets in the list of widget urls", function () {
            expect(dashlight.config.widgetUrls)
                .toEqual([
                    "js/src/widgets/one_line.js",
                    "js/src/widgets/build_status.js"
                ]);
        });

        it("has the 'travis_build_status' plugin in the list of plugin urls", function () {
            expect(dashlight.config.pluginUrls)
                .toEqual([
                    "js/src/plugins/travis_build_status.js"
                ]);
        });
    });

    describe("after init", function () {

        var renderSpy;

        beforeEach(function (done) {
            renderSpy = spyOn(dashlight, "notifyRendered")
                .and.callFake(function () {
                    if (renderSpy.calls.count() == 2) {
                        done();
                    }
                });

            dashlight.init($("<div></div>"));
        });

        it("has the 'one_line' and 'build_status' widgets loaded", function () {
            expect(Object.keys(dashlight.widgets)).toEqual([
                "one_line",
                "build_status"
            ]);
        });

        it("has the 'travis_build_status' plugin loaded", function () {
            expect(Object.keys(dashlight.plugins)).toEqual([
                "travis_build_status"
            ]);
        });

        it("has the 'helloworld' and 'travis_dashlight_provider' providers rendered", function () {
            expect(renderSpy.calls.allArgs()).toEqual([
                ["helloworld_provider"],
                ["travis_dashlight_provider"]
            ]);
        });

        it("container contains the text 'Hello, World!'", function () {
            expect(dashlight.container.text()).toContain('Hello, world!');
        });

        it("container contains the text 'build is finishing|running'", function () {
            expect(dashlight.container.text()).toMatch('dashlight :: Build and Deploy > (finished|running) build for \\[master\\];');
        });
    });
});
