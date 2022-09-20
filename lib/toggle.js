function toggle() {
  toggle.prototype.charConvert = function (word) {
    const A = 65;
    const a = 97;
    if(Number(word) || word ===null){
      return word
    }
    else{
    let str = word.split("");
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= "A" && str[i] <= "Z")
        str[i] = String.fromCharCode(
          str[i].charCodeAt(0) + a - A
        );
      else if (str[i] >= "a" && str[i] <= "z")
        str[i] = String.fromCharCode(
          str[i].charCodeAt(0) + A - a
        );
    }
    return str.join("");
  }
  };
}
module.exports = toggle;
