describe('Delete dublicate element App', () => { 

    var DeleteDubli = require('../lib/DeleteDublicateElem')
    var deleteDubli; 
    beforeEach(()=>{
        deleteDubli = new DeleteDubli();
    })

    it("deletedublicate App",()=>{
        expect(deleteDubli.delete(null)).toEqual(null);
        expect(deleteDubli.delete('')).toEqual('');
        expect(deleteDubli.delete([])).toEqual([]);
        expect(deleteDubli.delete([1])).toEqual([1]);
        expect(deleteDubli.delete([1,1])).toEqual([1]);
        expect(deleteDubli.delete([1,2])).toEqual([1,2]);
        expect(deleteDubli.delete([1,1,1])).toEqual([1]);
        expect(deleteDubli.delete([1,2,1])).toEqual([1,2]);
        expect(deleteDubli.delete([1,2,1,2])).toEqual([1,2]);
        expect(deleteDubli.delete([1,2,1,2,1])).toEqual([1,2]);
        expect(deleteDubli.delete([1,2,3,3,1,2])).toEqual([1,2,3]);




    })
 })