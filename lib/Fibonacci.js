function Fibonacci() {
  Fibonacci.prototype.find = function (number) {
    if(number===null || number==='' || number<=1 ){
        return number
    }
    let n1 = 0,n2 = 1,nextval;
    var count = [];
    for (let i = 1; i <= number; i++) {
      count.push(n1);
      nextval = n1 + n2;
      n1 = n2;
      n2 = nextval;
    }
    return count.toString()
  };
}
module.exports = Fibonacci;