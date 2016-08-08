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
            expect(dashlight.config.widgetUrls).toEqual(["js/src/widgets/one_line.js"]);
        });
    });

    describe("after init", function () {
        var renderSpy;

        beforeEach(function (done) {
            renderSpy = spyOn(dashlight, "notifyRendered")
                .and.callFake(function () {
                    done();
                });

            dashlight.init($("<div></div>"));
        });

        it("has the 'one_line' widget loaded", function () {
            expect(dashlight.widgets.hasOwnProperty("one_line")).toEqual(true);
        });

        it("has the 'helloworld' provider rendered", function () {
            expect(renderSpy.calls.argsFor(0)).toEqual(["helloworld_provider"]);
        });

        it("container has the text 'Hello, World!'", function () {
            expect(dashlight.container.text()).toEqual('Hello, world!');
        });
    });
});
