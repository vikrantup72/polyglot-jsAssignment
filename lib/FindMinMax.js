function FindMinMax() {
  FindMinMax.prototype.find = function (array) {
    if(array===null || array === ''){
        return array
    }
    // let minValue = Math.min(...array)
    // console.log(minValue);
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