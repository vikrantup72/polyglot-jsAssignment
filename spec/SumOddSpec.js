describe('SumOdd NUmber App', () => { 
    var SumOddNumber = require('../lib/SumOdd')
    var sumOddNumber;
    beforeEach(()=>{
        sumOddNumber = new SumOddNumber();
    })
    it('Sum Odd Numebr',()=>{
        expect(sumOddNumber.add(null)).toBe(null)
        expect(sumOddNumber.add('')).toBe('')
        expect(sumOddNumber.add(5)).toBe(4)
        expect(sumOddNumber.add(9)).toBe(16)
        expect(sumOddNumber.add(10)).toBe(25)
        expect(sumOddNumber.add(19)).toBe(81)
    })
 })