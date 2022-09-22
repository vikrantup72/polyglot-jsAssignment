function CheckDay() {
  CheckDay.prototype.checks = function(num) {
    if(!Number(num)){
      return num
    }
    const day = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday","Friday","Saturday"]
        return day[num-1];
  };
}

module.exports = CheckDay;

