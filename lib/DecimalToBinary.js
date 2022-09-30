function DecimalToBinary() {
  DecimalToBinary.prototype.binary = (num) => {
    if (num === null || num === "" || num<1) {
      return num;
    }
    let binary = "";
    while (num > 0) {
      if (num % 2 == 1) {
        binary = "1" + binary;
      } else {
        binary = "0" + binary;
      }
      num = Math.floor(num / 2);
    }
    return parseInt(binary)
  };
}
module.exports = DecimalToBinary;
