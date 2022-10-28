function Queue() {
  Queue.prototype.ready = function (arr, pcount) {
    var items = [];

    if (arr === null || arr === "") {
      return arr;
    }

    add(arr, items);

    remove(items, pcount);
    return items;
  };
}
module.exports = Queue;

function add(arr, items) {
  for (let i = 0; i < arr.length; i++) {
    items.push(arr[i]);
  }
}

function remove(items, pcount) {
  while (items.length >= pcount) {
    items.shift();
  }
}
