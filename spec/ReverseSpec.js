describe("Reverse Word App", () => {
  var ReverseWord = require("../lib/Reverse");
  var reverseWord;

  beforeEach(function () {
    reverseWord = new ReverseWord();
  });
  it("It is leap year", function () {
    expect(null).toEqual(reverseWord.check(null));
    expect(reverseWord.check("")).toEqual("");
    expect(reverseWord.check("A")).toEqual("A");
    expect(reverseWord.check("ab")).toEqual("ba");
    expect(reverseWord.check("hello")).toEqual("olleh");
    expect(reverseWord.check("hello world")).toEqual("dlrow olleh");
    expect(reverseWord.check("Hello World")).toEqual("dlroW olleH");
  });
});