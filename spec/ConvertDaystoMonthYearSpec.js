describe("Convert days to month App", function () {
    var Convertdaystomonth = require("../lib/ConvertDaysToYearMonthsDays");
    var convertdaystomonth;
    beforeEach(function () {
        convertdaystomonth = new Convertdaystomonth();
    });
    it("ctodymapp", function () {
      expect(null).toBe(convertdaystomonth.convert(null));
      expect("").toBe(convertdaystomonth.convert(""));
      expect("1 day").toBe(convertdaystomonth.convert(1));
      expect("2 days").toBe(convertdaystomonth.convert(2));
      expect("1 month").toBe(convertdaystomonth.convert(30));

    });
  });