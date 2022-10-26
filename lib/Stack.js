function Stack() {
  Stack.prototype.ready = function (arr, pcount) {
    var items = [];

    if (arr === null || arr === "") {
      return arr;
    }

    for (let i = 0; i < arr.length; i++) {
      items.push(arr[i]);
    }

    while (items.length >= pcount) {
      items.pop();
      console.log(items, "kllkkl");
    }
    return items;
  };
}
module.exports = Stack;
