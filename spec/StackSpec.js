describe("Stack App array", () => {
  var Stack = require("../lib/Stack");
  var stack;

  beforeEach(function () {
    stack = new Stack();
  });

  const addArray = (arr, poptime) => {
    let newArr;
    stack.clear();
    for (let i = 0; i < arr.length; i++) {
      stack.add(arr[i]);
    }
    for (let i = 1; i <= poptime; i++) {
      newArr = stack.remove();
    }
    return newArr;
  };
  it("stack App", function () {
    expect(addArray([12], 1)).toEqual([]);
    expect(addArray([12, 24], 1)).toEqual([12]);
    expect(addArray([12, 24, 11, 13], 2)).toEqual([12,24]);
  });
});
