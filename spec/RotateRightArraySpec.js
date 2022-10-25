describe("Right Rotate Array ", () => {
    var RightRotate = require("../lib/RotateRightArray");
    var rightRotate;
  
    beforeEach(function () {
      rightRotate = new RightRotate();
    });
    it("Right Rotate Array  Elements", function () {
      expect(rightRotate.rotateRight(null)).toEqual(null);
      expect(rightRotate.rotateRight("")).toEqual("");
      expect(rightRotate.rotateRight([])).toEqual([]);
      expect(rightRotate.rotateRight([1])).toEqual([1]);
      expect(rightRotate.rotateRight([1], 3)).toEqual([1]);
      expect(rightRotate.rotateRight([1, 2], 3)).toEqual([2,1]);
      expect(rightRotate.rotateRight([1, 2, 3], 1)).toEqual([3, 1, 2]);
      expect(rightRotate.rotateRight([1, 2, 3], 2)).toEqual([2,3,1]);
      expect(rightRotate.rotateRight([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5, 1, 2]);
    });
  });
  