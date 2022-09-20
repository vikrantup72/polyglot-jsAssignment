describe("Check Number Positive || Negative || Zero", function(){
    var CheckNumber = require('../lib/CheckNumber');
    var checkNumber;
    beforeEach(function() {
        checkNumber = new CheckNumber();
    });

    it("Check Number", function() {
    	expect("Positive").toEqual(checkNumber.check(14));
    	expect("Negative").toEqual(checkNumber.check(-14));
    	expect("Negative").toEqual(checkNumber.check(null));
    	expect("Zero").toEqual(checkNumber.check(0));

    });
});