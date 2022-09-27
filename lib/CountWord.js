function countWord() {
    countWord.prototype.count = function(str){
        if(str ===null||str ===''){
            return str
        }
        const arr = str.split(/\s+/g);
        return arr.filter(word => word !== '').length;
    }
  }

  module.exports = countWord;
