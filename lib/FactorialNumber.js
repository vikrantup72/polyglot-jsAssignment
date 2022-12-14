function FactorialNumber() {
  FactorialNumber.prototype.find = function (n) {
    if (n === null || n === "") {
      return n;
    }
    let answer = 1;
    if (n == 0 || n == 1) {
      return answer;
    }
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  };
}
module.exports = FactorialNumber;