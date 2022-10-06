function Checknum() {
  Checknum.prototype.check = function (num) {
    if (num > 0) {
      return "Positive";
    } else if (num < 0) {
      return "Negative";
    } else if (num === 0) {
      return "Zero";
    } else {
      return num;
    }
  };
}
module.exports = Checknum;
