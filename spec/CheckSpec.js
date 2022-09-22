describe("Check Number Positive || Negative || Zero", function(){
    var CheckNumber = require('../lib/CheckNumber');
    var checkNumber;
    beforeEach(function() {
        checkNumber = new CheckNumber();
    });

    it("Check Number", function() {
    	expect(null).toEqual(checkNumber.check(null));
    	expect("").toEqual(checkNumber.check(""));
        expect("Zero").toEqual(checkNumber.check(0));
    	expect("Positive").toEqual(checkNumber.check(14));
    	expect("Negative").toEqual(checkNumber.check(-14));
    });
});