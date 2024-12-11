import {
  getIndexPercentageFromValue,
  getNearestValueFromCurrentThumb,
  getNewThumbValue,
} from "./rangeCalculations";

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

describe("Given a getIndexPercentageFromValue function", () => {
  describe("When values is [1, 3, 6, 7, 10]", () => {
    const values = [1, 3, 6, 7, 10];

    describe("And value is 6", () => {
      test("Then should return 50", () => {
        const result = getIndexPercentageFromValue(6, values);

        expect(result).toBe(50);
      });
    });

    describe("And value is 1", () => {
      test("Then should return 0", () => {
        const result = getIndexPercentageFromValue(1, values);

        expect(result).toBe(0);
      });
    });

    describe("And value is 10", () => {
      test("Then should return 100", () => {
        const result = getIndexPercentageFromValue(10, values);

        expect(result).toBe(100);
      });
    });
  });
});

describe("Given a getNearestValueFromCurrentThumb function", () => {
  describe("When rangeValues is [1, 10, 30, 90, 200, 700]", () => {
    const rangeValues = [1, 10, 30, 90, 200, 700];

    describe("And value is 7", () => {
      test("Then should return 10", () => {
        const res = getNearestValueFromCurrentThumb(7, rangeValues);

        expect(res).toBe(10);
      });
    });

    describe("And value is 35", () => {
      test("Then should return 30", () => {
        const res = getNearestValueFromCurrentThumb(35, rangeValues);

        expect(res).toBe(30);
      });
    });

    describe("And value is 300", () => {
      test("Then should return 200", () => {
        const res = getNearestValueFromCurrentThumb(300, rangeValues);

        expect(res).toBe(200);
      });
    });

    describe("And value is 600", () => {
      test("Then should return 700", () => {
        const res = getNearestValueFromCurrentThumb(600, rangeValues);

        expect(res).toBe(700);
      });
    });
  });
});
