function ReverseWord() {
  ReverseWord.prototype.check = function (str) {
    if (str === null) {
      return str;
    }
    let r = "";
    for (let i = str.length - 1; i >= 0; i--) {
      r += str[i];
    }
    return r;
  };
}
module.exports = ReverseWord;