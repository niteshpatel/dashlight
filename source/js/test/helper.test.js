var initAndWaitUntilRenderedAndReturnRenderSpy = function (done) {
    renderSpy = spyOn(dashlight, "notifyRendered")
        .and.callFake(function () {
            if (renderSpy.calls.count() === 2) {
                done();
            }
        });

    dashlight.init($("<div></div>"));
    return renderSpy;
};
