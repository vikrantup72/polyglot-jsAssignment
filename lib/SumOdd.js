function SumOdd() {
  SumOdd.prototype.add = function (num) {
    if (num === null || num === "") {
      return num;
    }
    let sum = 0;
    for (var i = 0; i < num; i++) {
      if (isOdd(i)) {
        sum += i;
      }
    }
    return sum;
    function isOdd(n) {
      return Boolean(n % 2);
    }
  };
}
module.exports = SumOdd;