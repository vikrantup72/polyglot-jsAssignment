function RotateArray2times() {
  RotateArray2times.prototype.rotateLeft = function (arr, rotations) {
    if (arr === null) {
      return null;
    }
    let len = arr.length;
    for (let i = 0; i < rotations; i++) {
      let temp = arr[0];
      for (let i = 0; i < len; i++) {
        arr[i] = arr[i + 1];
      }
      arr[len - 1] = temp;
    }
    return arr;
  };
}
module.exports = RotateArray2times;
