describe("convert number into words", function(){
    var ConvertNumbers = require('../lib/Convert');
    var convertNumber;
    beforeEach(function() {
        convertNumber = new ConvertNumbers();
    });


    it("convert number", function() {
        expect("minus one").toBe(convertNumber.convert(-1))
        expect("zero").toBe(convertNumber.convert(0))
        expect("one").toBe(convertNumber.convert(1))
        expect("eleven").toBe(convertNumber.convert(11))

    	// expect("one billion, two hundred thirty-four million, five hundred sixty-seven thousand, eight hundred ninety").toEqual(convertNumber.convert(1234567890));
    });

})
