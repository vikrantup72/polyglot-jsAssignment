function countWord() {
    countWord.prototype.count = function(str){
        const arr = str.split(' ');
        return arr.filter(word => word !== '').length;
    }
  }

  module.exports = countWord;
