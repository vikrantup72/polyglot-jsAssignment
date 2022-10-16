function DeleteDublicateElem() {
  DeleteDublicateElem.prototype.delete = function (arr) {
    if (arr === null || arr === "") {
      return arr;
    }
   const res = arr.filter((item, index)=> arr.indexOf(item) == index);
   return res;
  };
}
module.exports = DeleteDublicateElem;
