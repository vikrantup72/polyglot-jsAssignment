describe("TestingFactor Number", function() {
    var FactorNum = require('../lib/Factor');
    var factorNum;
    beforeEach(function() {
        factorNum = new FactorNum();
    });
    it("Compare three Numbers", function() {
        expect(null).toBe(factorNum.check(null));
        expect('').toBe(factorNum.check(''));
        expect('1,3').toBe(factorNum.check(3));
        expect('1,2,3,4,6,12').toBe(factorNum.check(12));

    });
});