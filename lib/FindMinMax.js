function FindMinMax() {
  FindMinMax.prototype.find = function (array) {
    if (array === null || array === "" || array.length < 2) return array;
    minValue = Infinity;
    maxValue = -Infinity;
    for (item of array) {
      if (item < minValue) minValue = item;

      if (item > maxValue) maxValue = item;
    }
    return `minValue:${minValue} and maxValue:${maxValue}`
  };
}
module.exports = FindMinMax;