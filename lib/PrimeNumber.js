function PrimeNumber() {
  PrimeNumber.prototype.check = function (number) {
    let isPrime = true;
    if (number <= 1 || number === null || number === "") {
      return number;
    } else if (number > 1) {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) return "TRUE";
      else return "FALSE";
    }
  };
}
module.exports = PrimeNumber;