function CheckYearDay() {
  CheckYearDay.prototype.check = function (MonthName) {
    if(MonthName == "Jan") {
      return 31;
    } 
    else if (MonthName == "Feb") {
      let year = new Date().getFullYear();
      if (year % 4 == 0) {
        return 29;
      }
      return 28;
    } else if (MonthName == "Mar") {
      return 31;
    } else if (MonthName == "Apr") {
      return 30;
    } else if (MonthName == "May") {
      return 31;
    } else if (MonthName == "Jun") {
      return 30;
    } else if (MonthName == "Jul") {
      return 31;
    } else if (MonthName == "Aug") {
      return 31;
    } else if (MonthName == "Sep") {
      return 30;
    } else if (MonthName == "Oct") {
      return 31;
    } else if (MonthName == "Nov") {
      return 30;
    } else if (MonthName == "Dec") {
      return 31;
    }
    else{
      return MonthName
    }
  };
}
module.exports = CheckYearDay;
