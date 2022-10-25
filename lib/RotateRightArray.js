function RotateRightArray() {
  RotateRightArray.prototype.rotateRight = function (arr, rotations) {
    if (arr === null) {
      return null;
    }
    while (rotations > 0) {
      let res = arr.pop();
      console.log(res,"jjj");
      arr.unshift(res);
      console.log(arr);
      rotations--;
    }
    return arr;
  };
}
module.exports = RotateRightArray;
