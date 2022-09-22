describe("convert a give number of words", function() {

    var NumberToWordConverter = require("../lib/NumberToWordConverter");
    var numberToWordConverter;

    beforeEach(function() {
        numberToWordConverter = new NumberToWordConverter();
    })
    it("converts numbers to words", function() {
        expect(null).toEqual(numberToWordConverter.convert(null));
        expect("").toEqual(numberToWordConverter.convert(''));
        expect("one").toEqual(numberToWordConverter.convert(1));
        expect("five").toEqual(numberToWordConverter.convert(5));
        expect("ten").toEqual(numberToWordConverter.convert(10));
        expect("eleven").toEqual(numberToWordConverter.convert(11));
        expect("nineteen").toEqual(numberToWordConverter.convert(19));
        expect("twenty").toEqual(numberToWordConverter.convert(20));
        expect("twenty one").toEqual(numberToWordConverter.convert(21));
        expect("ninety nine").toEqual(numberToWordConverter.convert(99));
        expect("one hundred one").toEqual(numberToWordConverter.convert(101));
        expect("one hundred eleven").toEqual(numberToWordConverter.convert(111));
        expect("one hundred fifty").toEqual(numberToWordConverter.convert(150));
        expect("one hundred fifty one").toEqual(numberToWordConverter.convert(151));
        expect("five hundred").toEqual(numberToWordConverter.convert(500));
        expect("nine hundred ninety nine").toEqual(numberToWordConverter.convert(999));
        expect("one thousand").toEqual(numberToWordConverter.convert(1000));
        expect("one thousand one").toEqual(numberToWordConverter.convert(1001));
        expect("one thousand ten").toEqual(numberToWordConverter.convert(1010));
        expect("one thousand eleven").toEqual(numberToWordConverter.convert(1011));
        expect("one thousand one hundred eleven").toEqual(numberToWordConverter.convert(1111));
        expect("two thousand").toEqual(numberToWordConverter.convert(2000));
        expect("two thousand one").toEqual(numberToWordConverter.convert(2001));
        expect("nine thousand nine hundred ninety nine").toEqual(numberToWordConverter.convert(9999));
        expect("ten thousand").toEqual(numberToWordConverter.convert(10000));
        expect("ten thousand nine hundred ninety nine").toEqual(numberToWordConverter.convert(10999));

    })
    
})