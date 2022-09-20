function NumberToWordConverter() {
  var ones = {0: "zero",1: "one",2: "two",3: "three",4: "four",5: "five", 6: "six",7: "seven",8: "eight",9: "nine",};
  var tens = {10: "ten",11: "eleven",12: "twelve",13: "thirteen",14: "fourteen",15: "fifteen",16: "sixteen",17: "seventeen",18: "eighteen", 19: "nineteen",};
  var prefixes = {2: "twenty",3: "thirty",4: "forty",5: "fifty",6: "sixty",7: "seventy",8: "eighty",9: "ninety",};
  var suffixes = { 1: "",2: "thousand",};
  NumberToWordConverter.prototype.convert = function (num) {
    var numText = "";
    var absNum = Math.abs(num);

    if (num === null || num === "") {
      return num;
    }
    if (num.toString().includes("-")) {
      numText += "negative ";
    }
    if (absNum in ones) {
      numText += ones[absNum];
      console.log(numText);
    } else if (absNum < 100) {
      numText += twoDigitOrLessConvert(absNum);
    } else if (absNum >= 100) {
      numText += threeDigitConvert(absNum);
    }
    return numText.trim();

    function twoDigitOrLessConvert(num) {
      var currentNumText = "";
      if (num < 10) {
        return ones[num];
      }
      if (num in tens) {
        currentNumText += tens[num];
      } else {
        currentNumText += prefixes[num.toString().charAt(0)];
        if (num.toString().charAt(1) !== "0") {
          currentNumText += " " + ones[num.toString().charAt(1)];
        }
      }
      return currentNumText;
    }
    function threeDigitConvert(num) {
      var currentNumText = "";
      if (num < 100) {
        currentNumText += twoDigitOrLessConvert(num);
        return currentNumText;
      }
      currentNumText += ones[num.toString().charAt(0)];
      currentNumText += " hundred ";
      if (num.toString().substr(1) !== "00") {
        currentNumText += twoDigitOrLessConvert(
          parseInt(num.toString().substr(1))
        );
      }
      return currentNumText;
    }
  };
}

module.exports = NumberToWordConverter;
