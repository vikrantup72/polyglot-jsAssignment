describe("Queue App array", () => {
    var Queue = require("../lib/Queue");
    var queue;
  
    beforeEach(function () {
        queue = new Queue();
    });
    it("Queue App", function () {
      expect(queue.ready(null)).toEqual(null);
      expect(queue.ready("")).toEqual("");
      expect(queue.ready([])).toEqual([]);
      expect(queue.ready([1,4,6],2)).toEqual([6]);
      expect(queue.ready([1,4,6,5,2,1],4)).toEqual([5,2,1]);
    });
  });
  