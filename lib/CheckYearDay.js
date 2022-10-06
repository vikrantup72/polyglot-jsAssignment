function CheckYearDay() {
  CheckYearDay.prototype.check = function (MonthName) {
    const name31 = ["Jan","Mar", "May","Jul","Aug","Oct","Dec"];
    const name30 = ["Apr","Jun","Sep","Nov"];
    if (name31.includes(MonthName)) {
      return 31;
    } else if (name30.includes(MonthName)) {
      return 30;
    } else if (MonthName === "Feb") {
      let year = new Date().getFullYear();
      if (year % 4 == 0) {
        return 29;
      }
      return 28;
    } else {
      return MonthName;
    }
  };
}
module.exports = CheckYearDay;
