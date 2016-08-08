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

        it("has the 'one_line' widget in the list of widget urls", function () {
            expect(dashlight.config.widgetUrls[0]).toEqual("js/src/widgets/one_line.js");
        });

        it("has the 'build_status' widget in the list of widget urls", function () {
            expect(dashlight.config.widgetUrls[1]).toEqual("js/src/widgets/build_status.js");
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

        it("has the 'one_line' widget loaded", function () {
            expect(dashlight.widgets.hasOwnProperty("one_line")).toEqual(true);
        });

        it("has the 'build_status' widget loaded", function () {
            expect(dashlight.widgets.hasOwnProperty("build_status")).toEqual(true);
        });

        it("has the 'helloworld' provider rendered", function () {
            expect(renderSpy.calls.argsFor(0)).toEqual(["helloworld_provider"]);
        });

        it("has the 'travis_dashlight' provider rendered", function () {
            expect(renderSpy.calls.argsFor(1)).toEqual(["travis_dashlight_provider"]);
        });

        it("container contains the text 'Hello, World!'", function () {
            expect(dashlight.container.text()).toContain('Hello, world!');
        });

        it("container contains the text 'build finished'", function () {
            expect(dashlight.container.text()).toContain('build finished');
        });
    });
});
