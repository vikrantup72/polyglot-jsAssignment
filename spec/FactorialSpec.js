describe("Fcatorial Number", function() {
    var Fact = require('../lib/FactorialNumber');
    var fact;
    beforeEach(function() {
        fact = new Fact();
    });
    it("fact Numbers", function() {
        expect(null).toBe(fact.find(null));
        expect('').toBe(fact.find(''));
        expect(1).toBe(fact.find(1));
        expect(6).toBe(fact.find(3));
        expect(120).toBe(fact.find(5));
        expect(3628800).toBe(fact.find(10));
    });
});