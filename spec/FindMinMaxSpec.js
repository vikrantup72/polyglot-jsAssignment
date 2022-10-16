describe('Find Min and Max Value of an array', () => { 

    var FindMinMax = require('../lib/FindMinMax')
    var findMinMax; 
    beforeEach(()=>{
        findMinMax = new FindMinMax();
    })

    it("FindMinMax App",()=>{
        expect(findMinMax.find(null)).toBe(null);
        expect(findMinMax.find('')).toBe('');
        expect(findMinMax.find([5,2])).toBe("minValue:2 and maxValue:5");
        expect(findMinMax.find([2,3,4,5])).toBe("minValue:2 and maxValue:5");
    })
 })