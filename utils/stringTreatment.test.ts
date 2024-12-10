import { parseRangeInput } from "./stringTreatment";

describe("Given a parseRangeInput function", () => {
  describe("When recive a 10 value", () => {
    test("Then should return 10", () => {
      const result = parseRangeInput("10");

      expect(result).toBe("10");
    });
  });

  describe("When recive a 10g value", () => {
    test("Then should return 10", () => {
      const result = parseRangeInput("10g");

      expect(result).toBe("10");
    });
  });

  describe("When recive a 0010 value", () => {
    test("Then should return 10", () => {
      const result = parseRangeInput("0010");

      expect(result).toBe("10");
    });
  });

  describe("When recive a ggg value", () => {
    test("Then should return 0", () => {
      const result = parseRangeInput("ggg");

      expect(result).toBe("0");
    });
  });
});
