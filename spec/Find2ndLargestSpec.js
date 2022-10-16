describe('Find second Largest App', () => { 

    var Find2nd = require('../lib/Find2ndLargest')
    var find2nd; 
    beforeEach(()=>{
        find2nd = new Find2nd();
    })

    it("Find2ndLargest App",()=>{
        expect(find2nd.find(null)).toBe(null);
        expect(find2nd.find('')).toBe('');
        expect(find2nd.find([12, 35])).toBe(12);
        expect(find2nd.find([12, 35, 1, 10, 34, 1])).toBe(34);
    })
 })