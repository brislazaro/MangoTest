import { screen, fireEvent } from "@testing-library/react";
import { renderComponentFactory } from "../../utils/testUtils";
import Range from "./Range";

describe("Given a Range component", () => {
  describe("When it receives values as a prop with the value [1,2,3]", () => {
    test("Then should render FixedRange component", () => {
      renderComponentFactory(<Range values={[1, 2, 3]} />);

      expect(screen.getByTestId("fixed-range")).toBeInTheDocument();
    });
  });

  describe("When it receives min with value 1 and no max prop", () => {
    test("Then should not render FlexibleRange component", () => {
      renderComponentFactory(<Range min={1} />);

      expect(screen.queryByTestId("flexible-range")).not.toBeInTheDocument();
    });
  });

  describe("When it receives max with value 100 and no min prop", () => {
    test("Then should not render FlexibleRange component", () => {
      renderComponentFactory(<Range max={100} />);

      expect(screen.queryByTestId("flexible-range")).not.toBeInTheDocument();
    });
  });

  describe("When it receives min with value 1 and max with value 100", () => {
    test("Then should render FlexibleRange component", () => {
      renderComponentFactory(<Range min={1} max={100} />);

      expect(screen.getByTestId("flexible-range")).toBeInTheDocument();
    });
  });
});
