/* global beforeEach, describe, it, expect */
//noinspection JSUnusedAssignment
Object.toEqual = Object.toEqual || null;

describe("dashlight", function () {

    describe("'build_status' widget", function () {

        var renderSpy;

        beforeEach(function (done) {
            renderSpy = spyOn(dashlight, "notifyRendered")
                .and.callFake(function () {
                    if (renderSpy.calls.count() === 2) {
                        done();
                    }
                });

            dashlight.init($("<div></div>"));
        });

        it("adds start time if provided", function () {
            var text = dashlight.widgets.build_status.build({
                project: "dashlight",
                build: "Build and Deploy",
                state: "finished",
                branch: "master",
                startTime: moment(new Date()),
                finishTime: moment(new Date()),
                duration: moment.duration(0)
            }).text();

            expect(text)
                .toMatch('dashlight :: Build and Deploy >'
                    + ' (started|running|finished) build for \\[master\\];'
                    + ' started at .*'
                    + ' finished at .*');
        });
    });
});
