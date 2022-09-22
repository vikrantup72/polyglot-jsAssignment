describe('Reverse Word App', () => { 

    var ReverseWord = require("../lib/Reverse");
    var reverseWord;

    beforeEach(function() {
        reverseWord = new ReverseWord();
    })
    it("It is leap year", function() {
    	expect(null).toEqual(reverseWord.check(null));
        expect('').toEqual(reverseWord.check(''));
        expect("A").toEqual(reverseWord.check("A"));
        expect("ba").toEqual(reverseWord.check("ab"));
        expect("olleh").toEqual(reverseWord.check("hello"));
        expect("dlrow olleh").toEqual(reverseWord.check("hello world"));
        expect("dlroW olleH").toEqual(reverseWord.check("Hello World"));
    });
 })