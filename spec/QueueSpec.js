describe("Queue App array", () => {
  var Queue = require("../lib/Queue");
  var queue;

  beforeEach(function () {
    queue = new Queue();
  });

  const addArray = (arr, poptime) => {
    let newArr;
    queue.clear();
    for (let i = 0; i < arr.length; i++) {
      queue.add(arr[i]);
    }
    for (let i = 1; i <= poptime; i++) {
      newArr = queue.remove();
    }
    return newArr;
  };
  it("queue App", function () {
    expect(addArray([12], 1)).toEqual([]);
    expect(addArray([12, 24], 1)).toEqual([24]);
    expect(addArray([12, 24, 11, 13], 2)).toEqual([11, 13]);
  });
});
