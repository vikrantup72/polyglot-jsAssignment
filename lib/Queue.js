function Queue() {
  let item = []
  Queue.prototype.clear = function(num){
    item = [];
  }
  Queue.prototype.add = function(num){
    item.push(num)
    console.log(item,"kkl");
  }
  Queue.prototype.remove = function(){
    item.shift()
    return item
  }
}
module.exports = Queue;