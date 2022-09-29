function PerfactNumber() {
    PerfactNumber.prototype.is_perfect = function(number)
    {
        if(number===null|| number===""){
            return number
        }
    var i=1;
    var count =[]
    var temp = 0;
    function add (){
    for(i = 1; i<number; i++){
    if(number%i===0){
    count.push(i)
    }
    }
    return count.toString();
    }
       for(var i=1;i<=number/2;i++)
         {
             if(number%i === 0)
              {
                temp += i;
              }
         }
       
         if(temp === number && temp !== 0)
            {
          return add();
            } 
         else
            {
           return "0"
            }   
     } 
    
}
module.exports = PerfactNumber;