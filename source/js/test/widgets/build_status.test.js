/* global beforeEach, describe, it, expect */
//noinspection JSUnusedAssignment
Object.toEqual = Object.toEqual || null;

describe("dashlight", function () {

    describe("'build_status' widget", function () {

        var renderSpy;
        beforeEach(function (done) {
            renderSpy = initAndWaitUntilRenderedAndReturnRenderSpy(done);
        }, 15000);

        it("adds finish time if provided", function () {
            var text = dashlight.widgets.build_status.build({
                project: "dashlight",
                build: "BnD",
                state: "finished",
                branch: "master",
                startTime: moment(new Date()),
                finishTime: moment(new Date()),
                duration: moment.duration(100000)
            }).text();

            expect(text)
                .toMatch('dashlight :: BnD >'
                    + ' (started|running|finished) \\[master\\];'
                    + ' finished .*'
                    + ' \\(1m\\:40s\\)');
        });
    });
});
