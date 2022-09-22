describe("Check Day", function(){
    var CheckDay = require('../lib/Check_Day');
    var checkDay;
    beforeEach(function() {
        checkDay = new CheckDay();
    });

    it("Checks Day", function() {
    	expect(null).toBe(checkDay.checks(null));
    	expect('').toBe(checkDay.checks(''));
    	expect(0).toBe(checkDay.checks(0));
    	expect("Sunday").toBe(checkDay.checks(1));
    	expect("Monday").toBe(checkDay.checks(2));
    	expect("Tuesday").toBe(checkDay.checks(3));
    	expect("Wednesday").toBe(checkDay.checks(4));
    	expect("Thursday").toBe(checkDay.checks(5));
    	expect("Friday").toBe(checkDay.checks(6));
    	expect("Saturday").toBe(checkDay.checks(7));
    });
});