describe("Check Day", function(){
    var CheckYearDay = require('../lib/CheckYearDay');
    var checkYearDay;
    beforeEach(function() {
        checkYearDay = new CheckYearDay();
    });
    it("Check Day", function() {
    	expect(null).toBe(checkYearDay.check(null));
    	expect('').toBe(checkYearDay.check(''));
    	expect(31).toBe(checkYearDay.check("Jan"));
    	expect(28).toBe(checkYearDay.check("Feb"));
    	expect(31).toBe(checkYearDay.check("Mar"));
    	expect(30).toBe(checkYearDay.check("Apr"));
    	expect(31).toBe(checkYearDay.check("May"));
    	expect(30).toBe(checkYearDay.check("Jun"));
    	expect(31).toBe(checkYearDay.check("Jul"));
    	expect(31).toBe(checkYearDay.check("Aug"));
    	expect(30).toBe(checkYearDay.check("Sep"));
    	expect(31).toBe(checkYearDay.check("Oct"));
    	expect(30).toBe(checkYearDay.check("Nov"));
    	expect(31).toBe(checkYearDay.check("Dec"));
    });
});