describe("Decimal to binary Number", function() {
    var DecimalToBinary = require('../lib/DecimalToBinary');
    var decimalToBinary;
    beforeEach(function() {
        decimalToBinary = new DecimalToBinary();
    });
    it("DecimalToBinary number", function() {
        expect(null).toBe(decimalToBinary.binary(null));
        expect('').toBe(decimalToBinary.binary(''));
        expect(0).toBe(decimalToBinary.binary(0));
        expect(1).toBe(decimalToBinary.binary(1));
        expect(10).toBe(decimalToBinary.binary(2));
        expect(101).toBe(decimalToBinary.binary(5));
    });
});