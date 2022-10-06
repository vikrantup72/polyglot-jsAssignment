function checkPalindrome(string) {
  checkPalindrome.prototype.check = function (string) {
    if (string === null || string === "") {
      return "It is not a palindrome";
    }
    const strng = string.toLowerCase();
    const len = strng.length; //6 name
    console.log(len);
    for (let i = 0; i < len / 2; i++) {
      if (strng[i] !== strng[len - 1 - i]) {
        return "It is not a palindrome";
      }
    }
    return "It is a palindrome";
  };
}
module.exports = checkPalindrome;