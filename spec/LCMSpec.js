describe("LCM", () => {
    var LCMApp = require("../lib/LCM");
    var lcm;
  
    beforeEach(function () {
      lcm = new LCMApp();
    });
    it("least common factor", function () {
      expect(lcm.find(null)).toEqual(null);
      expect(lcm.find("")).toEqual(null);
      expect(lcm.find(0)).toEqual(null);
      expect(lcm.find(1,1)).toEqual(1);
      expect(lcm.find(2,1)).toEqual(2);
      expect(lcm.find(6, 8)).toEqual(24);
    });
  });
  