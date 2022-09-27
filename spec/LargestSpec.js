describe("Testing Two Numbers", function() {
    var Find = require('../lib/FindLargest');
    var find;
    beforeEach(function() {
      find = new Find();
    });
    it("Compare two Numbers", function() {
        expect(null).toBe(find.TwoNumber(null));
        expect(null).toBe(find.TwoNumber(''));
        expect(4).toBe(find.TwoNumber(4,3));
        expect(7).toBe(find.TwoNumber(5,7));

    });
    it("Compare three Numbers", function() {
        expect(null).toBe(find.TwoNumber(null));
        expect(null).toBe(find.TwoNumber(''));
        expect(4).toBe(find.ThreeNumber(4,3,2));
        expect(7).toBe(find.ThreeNumber(5,7,7));

    });
});