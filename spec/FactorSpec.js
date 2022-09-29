describe("TestingFactor Number", function() {
    var FactorNum = require('../lib/Factor');
    var factorNum;
    beforeEach(function() {
        factorNum = new FactorNum();
    });
    it("Fcator App Numbers", function() {
        expect(factorNum.check(null)).toBe(null);
        expect(factorNum.check('')).toBe('');
        expect(factorNum.check(3)).toBe('1,3');
        expect(factorNum.check(4)).toBe('1,2,4');
        expect(factorNum.check(12)).toBe('1,2,3,4,6,12');

    });
});