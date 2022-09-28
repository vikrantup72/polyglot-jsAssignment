function Factor() {
  Factor.prototype.check = function (num) {
    if(num===null || num=== ''){
        return num
    }
    var data = []
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        data=[...data, i]
      }
    }
    return data.toString()
  };
}

module.exports = Factor