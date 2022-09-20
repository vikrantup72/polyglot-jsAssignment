describe("count word app", function() {
    var CountWord = require('../lib/CountWord');
    var countWord;
    beforeEach(function() {
        countWord = new CountWord();
    });

    it("count word", function() {
        // expect(null).toBe(countWord.count(null));
        // expect('').toBe(countWord.count(''));
    	expect(1).toEqual(countWord.count("Hello"));
    	expect(4).toEqual(countWord.count("hello\nworldtom\tjerry"));

    });
});