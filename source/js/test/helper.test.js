var initAndWaitUntilRenderedAndReturnRenderSpy = function (done) {
    renderSpy = spyOn(dashlight, "notifyRendered")
        .and.callFake(function () {
            if (renderSpy.calls.count() === 3) {
                done();
            }
        });

    dashlight.init($("<div></div>"));
    return renderSpy;
};
