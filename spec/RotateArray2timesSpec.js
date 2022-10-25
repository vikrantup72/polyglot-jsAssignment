describe("Left Rotate Array ", () => {
  var LeftRotate = require("../lib/RotateArray2times");
  var leftRotate;

  beforeEach(function () {
    leftRotate = new LeftRotate();
  });
  it("Left Rotate Array  Elements", function () {
    expect(leftRotate.rotateLeft(null)).toEqual(null);
    expect(leftRotate.rotateLeft("")).toEqual("");
    expect(leftRotate.rotateLeft([])).toEqual([]);
    expect(leftRotate.rotateLeft([1])).toEqual([1]);
    expect(leftRotate.rotateLeft([1], 2)).toEqual([1]);
    expect(leftRotate.rotateLeft([1, 2], 2)).toEqual([1, 2]);
    expect(leftRotate.rotateLeft([1, 2, 3], 2)).toEqual([3, 1, 2]);
    expect(leftRotate.rotateLeft([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5, 1, 2]);
  });
});
