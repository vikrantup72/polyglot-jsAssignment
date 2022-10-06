describe("Print Table  App", () => {
  var PrintTable = require("../lib/PrintTable");
  var printTable;
  beforeEach(() => {
    printTable = new PrintTable();
  });
  it("PrintTable App", () => {
    expect(printTable.table(null)).toBe(null);
    expect(printTable.table("")).toBe("");
    expect(printTable.table(0)).toBe(0);
    expect(printTable.table(2)).toBe(
      "2*1=2,2*2=4,2*3=6,2*4=8,2*5=10,2*6=12,2*7=14,2*8=16,2*9=18,2*10=20"
    );
    expect(printTable.table(5)).toBe(
      "5*1=5,5*2=10,5*3=15,5*4=20,5*5=25,5*6=30,5*7=35,5*8=40,5*9=45,5*10=50"
    );
    expect(printTable.table(10)).toBe(
      "10*1=10,10*2=20,10*3=30,10*4=40,10*5=50,10*6=60,10*7=70,10*8=80,10*9=90,10*10=100"
    );
  });
});
