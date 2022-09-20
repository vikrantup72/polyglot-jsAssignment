function CheckDay() {
//   CheckDay.prototype.checks = function(num) {
//     console.log(num);
//     const day = ["Sunday", "Monday","Tuesday", "Wednessday", "Thursday","Friday","Saturday"]
//         return day[num-1];
//   };
// }
CheckDay.prototype.checks = function(num) {
   if(num==1){
    return "Sunday";
   }
   else if(num==2){
    return "Monday";
   }
   else if(num==3){
    return "Tuesday";
   }
   else if(num==4){
    return "Wednesday";
   }
   else if(num==5){
    return "Thursday";
   }
   else if(num==6){
    return "Friday";
   }
   else if(num==7){
    return "Saturday";
   }
   else {
    return "null"
   }
  };
}

module.exports = CheckDay;

