describe('Delete dublicate element App', () => { 

    var DeleteDubli = require('../lib/DeleteDublicateElem')
    var deleteDubli; 
    beforeEach(()=>{
        deleteDubli = new DeleteDubli();
    })

    it("deletedublicate App",()=>{
        expect(deleteDubli.delete(null)).toBe(null);
        expect(deleteDubli.delete('')).toBe('');
        expect(deleteDubli.delete([12,23,43,12,23])).toEqual([12,23,43])
        expect(deleteDubli.delete([10, 20,100, 50, 100, 10, 20])).toEqual([10, 20, 100, 50])
        expect(deleteDubli.delete(["apple", "mango", "apple", "orange", "mango", "mango"])).toEqual(['apple', 'mango', 'orange'])
    })
 })