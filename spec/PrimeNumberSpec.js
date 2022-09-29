describe('Prime Number App', () => { 

    var CheckPrimeNumber = require('../lib/PrimeNumber');
    var checkPrimeNumber;
    beforeEach(()=>{
        checkPrimeNumber = new CheckPrimeNumber();
    });

    it("PrimeNumber App",()=>{
        expect(checkPrimeNumber.check(null)).toBe(null);
        expect(checkPrimeNumber.check('')).toBe('');
        expect(checkPrimeNumber.check(-1)).toBe(-1);
        expect(checkPrimeNumber.check(0)).toBe(0);
        expect(checkPrimeNumber.check(1)).toBe(1);
        expect(checkPrimeNumber.check(5)).toBe('TRUE');
        expect(checkPrimeNumber.check(6)).toBe('FALSE');
    });
})