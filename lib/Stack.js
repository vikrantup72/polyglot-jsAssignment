function Stack() {
  Stack.prototype.ready = function (arr, pcount) {
    var items = [];

    if (arr === null || arr === "") {
      return arr;
    }

	add(arr, items);

    remove(items, pcount);
    return items;
  };

    function add(arr, items) {
        for (let i = 0; i < arr.length; i++) {
            items.push(arr[i]);
        }
    }

    function remove(items, pcount) {
        while (items.length >= pcount) {
            items.pop();
        }
    }
}
module.exports = Stack;
