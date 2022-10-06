describe("check Palindrome Number app", function () {
  var CheckPalindrome = require("../lib/Palindrome");
  var checkPalindrome;
  beforeEach(function () {
    checkPalindrome = new CheckPalindrome();
  });
  it("Check palindrome word", function () {
    expect(checkPalindrome.check(null)).toBe("It is not a palindrome");
    expect(checkPalindrome.check("")).toBe("It is not a palindrome");
    expect(checkPalindrome.check("121")).toEqual("It is a palindrome");
    expect(checkPalindrome.check("MaDam")).toEqual("It is a palindrome");
    expect(checkPalindrome.check("jAhAj")).toEqual("It is a palindrome");
    expect(checkPalindrome.check("Name")).toEqual("It is not a palindrome");
    expect(checkPalindrome.check("kAvi")).toEqual("It is not a palindrome");
    expect(checkPalindrome.check("First")).toEqual("It is not a palindrome");
    expect(checkPalindrome.check("1_1")).toBe("It is a palindrome");
  });
});
