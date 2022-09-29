describe('Print Table  App', () => { 

    var PrintTable = require('../lib/PrintTable');
    var printTable;
    beforeEach(()=>{
        printTable = new PrintTable();
    });

    it("PrintTable App",()=>{
        expect(printTable.table(null)).toBe(null);
        expect(printTable.table('')).toBe('');
        expect(printTable.table(0)).toBe(0);
        expect(printTable.table(2)).toBe('2,4,6,8,10,12,14,16,18,20');
        expect(printTable.table(5)).toBe('5,10,15,20,25,30,35,40,45,50');
        expect(printTable.table(10)).toBe('10,20,30,40,50,60,70,80,90,100');
    });
})