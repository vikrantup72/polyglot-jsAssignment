function FindLeapYear() {
    FindLeapYear.prototype.find = function(Year) {
        if(Year%4==0){
            return "It is Leap Year";
        }
        else{
            return "It is not Leap Year";
        }
      }
}
module.exports = FindLeapYear;