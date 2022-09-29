describe('Prime Fact App', () => { 

    var PrimeFactorNumber = require('../lib/PrimeFactor');
    var primeFactorNumber;
    beforeEach(()=>{
        primeFactorNumber = new PrimeFactorNumber();
    });

    it("Prime Factor numer App",()=>{
        expect(primeFactorNumber.prime_factors(null)).toBe(null);
        expect(primeFactorNumber.prime_factors('')).toBe('');
        expect(primeFactorNumber.prime_factors(0)).toBe(0);
        expect(primeFactorNumber.prime_factors(1)).toBe(1);
        expect(primeFactorNumber.prime_factors(2)).toBe('2');
        expect(primeFactorNumber.prime_factors(3)).toBe('3');
        expect(primeFactorNumber.prime_factors(10)).toBe('2,5');
        expect(primeFactorNumber.prime_factors(84)).toBe('2,3,7');
    });
})