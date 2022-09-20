describe("Testing Two Numbers", function() {
    var Find = require('../lib/FindLargest');
    var find;
    beforeEach(function() {
      find = new Find();
    });
    it("Add Numbers", function() {
        expect(find.AddTwoNumbers(4,3)).toEqual(7);
    });
    it("Multiply Numbers", function() {
        expect(find.MultiplyTwoNumbers(4,3)).toEqual(12);
    });
 
    it("Compare Numbers to be Greater Than", function() {
    	expect(4).toBeGreaterThan(3);
    });
 
    it("Compare Numbers to be Less Than", function() {
    	expect(3).toBeLessThan(4);
    });
    it("Compare three Numbers", function() {
        expect(4).toBe(find.ThreeNumber(4,3,2));
        expect(7).toBe(find.ThreeNumber(5,7,7));

    });
});