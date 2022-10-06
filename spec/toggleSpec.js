describe("toggle char app", function () {
  var ToggleChar = require("../lib/toggle");
  var toggleChar;

  beforeEach(function () {
    toggleChar = new ToggleChar();
  });
  it("toggle word", function () {
    expect(null).toBe(toggleChar.charConvert(null));
    expect("").toBe(toggleChar.charConvert(""));
    expect("HeLLO").toBe(toggleChar.charConvert("hEllo"));
    expect(2).toBe(toggleChar.charConvert(2));
  });
});