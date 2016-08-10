/* global beforeEach, describe, it, expect */
//noinspection JSUnusedAssignment
Object.toEqual = Object.toEqual || null;

describe("dashlight", function () {

    describe("'yql_stock_prices' plugin", function () {

        var renderSpy;
        beforeEach(function (done) {
            renderSpy = initAndWaitUntilRenderedAndReturnRenderSpy(done);
        }, 15000);

        it("processes single quote", function () {
            var content = dashlight.plugins.yql_stock_prices.processResponse({
                "query": {
                    "results": {
                        "quote": {
                            "symbol": "RBS.L",
                            "LastTradePriceOnly": "194.90",
                            "Name": "ROYAL BK SCOTL GR",
                            "Change": "+2.60",
                            "PercentChange": "+1.35%"
                        }
                    }
                }
            });
            
            expect(content.length).toEqual(1);
            expect(content[0].symbol).toEqual("RBS.L");
            expect(content[0].name).toEqual("ROYAL BK SCOTL GR");
            expect(content[0].price).toEqual("194.90");
            expect(content[0].change).toEqual("+2.60");
            expect(content[0].percentChange).toEqual("+1.35%");
        });
    });
});
