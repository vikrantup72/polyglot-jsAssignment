 describe("count vowel and consonent app", function() {

    var CountVC = require("../lib/Countvowelandconsonent");
    var countVC;
    
    beforeEach(function () {
        countVC = new CountVC();
    });
  
    it("count vowel and consonent app", function() {
      expect(null).toBe(countVC.count(null))
      expect('').toBe(countVC.count(''))
      expect('1 vowels').toBe(countVC.count('a'))
      expect('1 consonents').toBe(countVC.count('b'))
      expect('3 consonents').toBe(countVC.count('bbb'))
      expect('2 vowels and 3 consonents').toBe(countVC.count('hello'))
      expect('2 vowels and 3 consonents').toBe(countVC.count('hell o'))
      expect('3 vowels and 7 consonents').toBe(countVC.count('Hello_world'))


    });
  });