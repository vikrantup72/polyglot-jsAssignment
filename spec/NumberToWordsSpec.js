describe("convert a give number of words", function() {

    var NumberToWordConverter = require("../lib/NumberToWordConverter");
    var numberToWordConverter;

    beforeEach(function() {
        numberToWordConverter = new NumberToWordConverter();
    })
    it("converts numbers to words", function() {
        expect(null).toEqual(numberToWordConverter.convert(null));
        expect(null).toEqual(numberToWordConverter.convert(''));
        expect("zero").toEqual(numberToWordConverter.convert(0));
        expect("one").toEqual(numberToWordConverter.convert(1));



        


    })
    
})