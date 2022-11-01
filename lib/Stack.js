function Stack() {
  let item = []
  Stack.prototype.clear = function(){
    item = [];
  }
  Stack.prototype.add = function(num){
    item.push(num)
    console.log(item,"kkl");
  }
  Stack.prototype.remove = function(){
    item.pop()
    return item
  }
}
module.exports = Stack;