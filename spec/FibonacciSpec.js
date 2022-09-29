describe('Fibonacci Series App', () => { 

    var FibonacciSeries = require('../lib/Fibonacci');
    var fibonacciSeries;
    beforeEach(()=>{
        fibonacciSeries = new FibonacciSeries();
    });

    it("Fibonacciseries App",()=>{
        expect(fibonacciSeries.find(null)).toBe(null);
        expect(fibonacciSeries.find('')).toBe('');
        expect(fibonacciSeries.find(0)).toBe(0);
        expect(fibonacciSeries.find(5)).toBe('0,1,1,2,3');
        expect(fibonacciSeries.find(10)).toBe('0,1,1,2,3,5,8,13,21,34');
    });
})