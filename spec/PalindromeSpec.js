describe("check Palindrome Number app", function() {
    var CheckPalindrome = require('../lib/Palindrome');
    var checkPalindrome;
    beforeEach(function() {
        checkPalindrome = new CheckPalindrome();
    });

    it("Check palindrome word", function() {
        expect('It is not a palindrome').toBe(checkPalindrome.check(null))
        expect('It is not a palindrome').toBe(checkPalindrome.check(''))
    	expect("It is a palindrome").toEqual(checkPalindrome.check("121"));
    	expect("It is a palindrome").toEqual(checkPalindrome.check("MaDam"));
    	expect("It is a palindrome").toEqual(checkPalindrome.check("jAhAj"));
    	expect("It is not a palindrome").toEqual(checkPalindrome.check("Name"));
    	expect("It is not a palindrome").toEqual(checkPalindrome.check("kAvi"));
    	expect("It is not a palindrome").toEqual(checkPalindrome.check("First"));
        expect('It is a palindrome').toBe(checkPalindrome.check('1_1'))



    });
});