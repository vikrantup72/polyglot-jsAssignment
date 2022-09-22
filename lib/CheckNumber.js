function Checknum() {
    Checknum.prototype.check = function(num){
        if(num === null || num === '')
        {
            return num
        }
        if(num>0){
            return "Positive";
        }
        else if(num===0){
            return "Zero";
        }
        else{
            return "Negative";
        }
    }
}
module.exports = Checknum