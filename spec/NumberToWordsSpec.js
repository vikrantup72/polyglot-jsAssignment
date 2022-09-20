describe("convert a give number of words", function() {

    var NumberToWordConverter = require("../lib/NumberToWordConverter");
    var numberToWordConverter;

    beforeEach(function() {
        numberToWordConverter = new NumberToWordConverter();
    })
    it("converts numbers to words", function() {
        expect(null).toEqual(numberToWordConverter.convert(null));
        expect("").toEqual(numberToWordConverter.convert(''));
        expect("negative one").toEqual(numberToWordConverter.convert(-1));
        expect("one").toEqual(numberToWordConverter.convert(1));
        expect("five").toEqual(numberToWordConverter.convert(5));
        expect("ten").toEqual(numberToWordConverter.convert(10));
        expect("eleven").toEqual(numberToWordConverter.convert(11));
        expect("nineteen").toEqual(numberToWordConverter.convert(19));
        expect("twenty").toEqual(numberToWordConverter.convert(20));
        expect("twenty one").toEqual(numberToWordConverter.convert(21));
        expect("ninety nine").toEqual(numberToWordConverter.convert(99));
        expect("one hundred one").toEqual(numberToWordConverter.convert(101));
        expect("one hundred fifty").toEqual(numberToWordConverter.convert(150));
        expect("five hundred").toEqual(numberToWordConverter.convert(500));
        expect("nine hundred ninety nine").toEqual(numberToWordConverter.convert(999));
        expect("one thousand").toEqual(numberToWordConverter.convert(1000));
















        


    })
    
})