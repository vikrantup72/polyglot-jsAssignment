describe("LetterOccurrence App ", () => {
  var LetterOccurrence = require("../lib/letterOccurrence");
  var letterOccurrence;

  beforeEach(function () {
    letterOccurrence = new LetterOccurrence();
  });
  it("letterOccurrence app", function () {
    expect(letterOccurrence.find(null)).toEqual(null);
    expect(letterOccurrence.find("")).toEqual("");
    expect(letterOccurrence.find("A")).toEqual("");
    expect(letterOccurrence.find("A--A")).toEqual("A:2,-:2");
    expect(letterOccurrence.find("AAB")).toEqual("A:2");
    expect(letterOccurrence.find("AABB")).toEqual("A:2,B:2");
    expect(
      letterOccurrence.find("The Quick Brown Fox Jumps Over The Lazy Dog")
    ).toEqual("T:2,h:2,e:3,u:2,r:2,o:3");
  });
});
