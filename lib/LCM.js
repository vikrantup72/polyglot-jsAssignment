function LCM() {
  LCM.prototype.find = function (num1, num2) {
    if(num1 <=0 || num2 <=0 || num1 === '' || num2 ===''  ){
      return null
    }
    let min = num1 > num2 ? num1 : num2;
    while (true) {
      if (min % num1 == 0 && min % num2 == 0) {
       return min;
      }
      min++;
    }
    return null;
  };
}
module.exports = LCM;