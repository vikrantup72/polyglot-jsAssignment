function FindMaximum() {
  FindMaximum.prototype.TwoNumber = function (a, b) {
    if (!Number(a) && !Number(b)) {
      return null;
    }
    if (a >= b) {
      return a;
    } else {
      return b;
    }
  };
  FindMaximum.prototype.ThreeNumber = function (a, b, c) {
    if (!Number(a) && !Number(b) && !Number(c)) {
      return null;
    }
    if (a >= b && a >= c) {
      return a;
    } else if (b >= a && b >= c) {
      return b;
    } else {
      return c;
    }
  };
}
module.exports = FindMaximum;
