describe("Satck App array", () => {
    var Stack = require("../lib/Stack");
    var stack;
  
    beforeEach(function () {
      stack = new Stack();
    });
    it("Stack App", function () {
      expect(stack.ready(null)).toEqual(null);
      expect(stack.ready("")).toEqual("");
      expect(stack.ready([])).toEqual([]);
      expect(stack.ready([1,4,6],2)).toEqual([1]);
      expect(stack.ready([1,4,6,5,2,1],4)).toEqual([1,4,6]);
    });
  });
  