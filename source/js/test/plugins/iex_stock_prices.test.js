/* global beforeEach, describe, it, expect */
//noinspection JSUnusedAssignment
Object.toEqual = Object.toEqual || null;

describe("dashlight", function () {

    describe("'iex_stock_prices' plugin", function () {

        var renderSpy;
        beforeEach(function (done) {
            renderSpy = initAndWaitUntilRenderedAndReturnRenderSpy(done);
        }, 15000);

        it("processes single quote", function () {
            var content = dashlight.plugins.iex_stock_prices.processResponse({
                "GOOG": {
                    "quote": {
                        "symbol": "GOOG",
                        "companyName": "Alphabet Inc.",
                        "latestPrice": 1057.79,
                        "change": -12.21,
                        "changePercent": -1.141
                    }
                }
            });

            expect(content.length).toEqual(1);
            expect(content[0].symbol).toEqual("GOOG");
            expect(content[0].name).toEqual("Alphabet Inc.");
            expect(content[0].price).toEqual("1057.79");
            expect(content[0].change).toEqual("-12.21");
            expect(content[0].percentChange).toEqual("-1.141");
        });
    });
});
