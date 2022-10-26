function Queue() {
    Queue.prototype.ready = function (arr, pcount) {
    var items = [];

    if (arr === null || arr === "") {
      return arr;
    }

    for (let i = 0; i < arr.length; i++) {
      items.push(arr[i]);
    }

    while (items.length >= pcount) {
      items.shift();
      console.log(items, "kllkkl");
    }
    return items;
  };
}
module.exports = Queue;
