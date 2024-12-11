import { renderComponentFactory } from "../../../utils/testUtils";
import FixedRange from "./FixedRange";
import { screen } from "@testing-library/react";

describe("Given a Fixedrange component", () => {
  describe("When it receives an array [1,2,3,4,5]", () => {
    const values = [1, 2, 3, 4, 5];

    beforeEach(() => {
      renderComponentFactory(<FixedRange values={values} />);
    });

    test("Then should put 1 as the value of the min input and 5 to the max one", () => {
      const minLabel = screen.getByTestId("min");
      const maxLabel = screen.getByTestId("max");

      expect(minLabel).toHaveTextContent("1");
      expect(maxLabel).toHaveTextContent("5");
    });

    test("Then should print 5 dots", () => {
      const dots = screen.getAllByTestId("dot");

      expect(dots.length).toBe(5);
    });
  });
});
