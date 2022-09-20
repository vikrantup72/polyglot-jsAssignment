describe("Testing Two Numbers", function() {
    var LeapYear = require('../lib/FindLeapYear');
    var leapyear;
    beforeEach(function() {
        leapyear = new LeapYear();
    });

    it("It is leap year", function() {
    	expect("It is Leap Year").toEqual(leapyear.find(2020));
    	expect("It is Leap Year").toEqual(leapyear.find(2016));
    	expect("It is Leap Year").toEqual(leapyear.find(2012));
    	expect("It is Leap Year").toEqual(leapyear.find(2008));
    	expect("It is Leap Year").toEqual(leapyear.find(2004));
    	expect("It is Leap Year").toEqual(leapyear.find(2000));
    	expect("It is Leap Year").toEqual(leapyear.find(1996));
    	expect("It is Leap Year").toEqual(leapyear.find(1992));
    	expect("It is Leap Year").toEqual(leapyear.find(1988));
    	expect("It is Leap Year").toEqual(leapyear.find(4));
    });
    it("It is not leap year", function() {
    	expect("It is not Leap Year").toEqual(leapyear.find(2019));
    	expect("It is not Leap Year").toEqual(leapyear.find(2010));
    	expect("It is not Leap Year").toEqual(leapyear.find(2018));
    	expect("It is not Leap Year").toEqual(leapyear.find(2014));
    	expect("It is not Leap Year").toEqual(leapyear.find(2022));
    	expect("It is not Leap Year").toEqual(leapyear.find(1998));
    	expect("It is not Leap Year").toEqual(leapyear.find(1994));
    });
});