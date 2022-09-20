function NumberToWordConverter() {
    var ones = ["zero","one","two"]
  NumberToWordConverter.prototype.convert = function (num) {
    if (num === null || num === "") {
      return null;
    }
    if (num < 10) {

    }
    return "zero";
  };
}

module.exports = NumberToWordConverter;
