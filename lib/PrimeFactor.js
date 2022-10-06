function PrimeFactor() {
  PrimeFactor.prototype.prime_factors = function (num) {
    if (num === null || num === "" || num <= 1) {
      return num;
    }
    const result = [];
    for (let i = 2; i <= num; i++) {
      while (is_prime(i) && num % i === 0) {
        if (!result.includes(i)) result.push(i);
        num /= i;
      }
    }
    return result.join(",");

    function is_prime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  };
}
module.exports = PrimeFactor;