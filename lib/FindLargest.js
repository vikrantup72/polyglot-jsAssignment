function FindMaximum() {
    FindMaximum.prototype.AddTwoNumbers = function(a,b) {
        return a + b;
      }
       
      FindMaximum.prototype.MultiplyTwoNumbers = function(a,b) {
            return a * b;
      }

      FindMaximum.prototype.ThreeNumber = function(a,b,c) {

        if(a>=b && a>=c){
            return a
        }
        else if(b>=a && b>=c)
        {
            return b;
        }
        else {
            return c;
        }
  }
}
module.exports = FindMaximum;