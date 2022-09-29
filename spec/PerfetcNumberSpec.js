describe('Perfact Number App', () => { 

    var PerfactNumber = require('../lib/PerfactNumber');
    var perfactNumber;
    beforeEach(()=>{
        perfactNumber = new PerfactNumber();
    });

    it("Perfact sum numer App",()=>{
        expect(perfactNumber.is_perfect(null)).toBe(null);
        expect(perfactNumber.is_perfect('')).toBe('');
        expect(perfactNumber.is_perfect(3)).toBe('0');
        expect(perfactNumber.is_perfect(4)).toBe('0');
        expect(perfactNumber.is_perfect(6)).toBe('1,2,3');
        expect(perfactNumber.is_perfect(28)).toBe('1,2,4,7,14');
    });
})