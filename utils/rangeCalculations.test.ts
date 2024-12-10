import { getNewThumbValue } from "./rangeCalculations";

describe("Given a getNewThumbValue function", () => {
  describe("When sldierRect left is 0, sliderRect width is 300, min is 1 and max is 100", () => {
    const sliderRectMock: DOMRect = {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 300,
      x: 0,
      y: 0,
      toJSON: () => {},
    };

    describe("And mousePosition is 150", () => {
      test("Then should return 51", () => {
        const result = getNewThumbValue(150, sliderRectMock, 1, 100);

        expect(result).toBe(51);
      });
    });

    describe("And mousePosition is 0", () => {
      test("Then should return 1", () => {
        const result = getNewThumbValue(0, sliderRectMock, 1, 100);

        expect(result).toBe(1);
      });
    });

    describe("And mousePosition is 300", () => {
      test("Then should return 100", () => {
        const result = getNewThumbValue(300, sliderRectMock, 1, 100);

        expect(result).toBe(100);
      });
    });

    describe("And mousePosition is 75", () => {
      test("Then should return 26", () => {
        const result = getNewThumbValue(75, sliderRectMock, 1, 100);

        expect(result).toBe(26);
      });
    });

    describe("And mousePosition is 225", () => {
      test("Then should return 76", () => {
        const result = getNewThumbValue(225, sliderRectMock, 1, 100);

        expect(result).toBe(75);
      });
    });
  });
});
