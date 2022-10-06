function Convert() {
  var numberToWords = require("number-to-words");
  Convert.prototype.convert = function (num) {
    var res = numberToWords.toWords(num);
    return res;
  };
}
module.exports = Convert;