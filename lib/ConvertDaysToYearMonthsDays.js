function ConvertDaysToYearMonthsDays(){
    ConvertDaysToYearMonthsDays.prototype.convert = function(days){
        if (days===null || days ===''){
            return days;
        }
        ans ="";

        if(days <30)
        ans = (days > 1 ? days +" days" : days + " day")

        else if(days >= 30){
        days = days/30;
        ans = (days > 1 ? days +" months" : days + " month")
        }


return ans
}
}
module.exports = ConvertDaysToYearMonthsDays;