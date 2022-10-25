function DeleteDublicateElem() {
  DeleteDublicateElem.prototype.delete = function (arr) {
    if (arr === null || arr === "" || arr.length < 2) return arr;
    let b = 0,
      c = 0;
    while (b < arr.length) {
      c = b + 1;
      while (c < arr.length) {
        if (arr[b] === arr[c]) arr.pop(c);
        else c++;
      }

      b++;
    }
    return arr;
  };
}
module.exports = DeleteDublicateElem;
