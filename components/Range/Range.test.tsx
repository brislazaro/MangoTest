import { screen, fireEvent } from "@testing-library/react";
import { renderComponentFactory } from "../../utils/testUtils";
import Range from "./Range";

describe("Given a Range component", () => {
  describe("When it receives min=1 and max=100", () => {
    test("Then should put 1 as the value of the min input and 100 to the max one", () => {
      renderComponentFactory(<Range min={1} max={100} />);

      const minInput = screen.getByTestId("input-min");
      const maxInput = screen.getByTestId("input-max");

      expect(minInput).toHaveValue("1");
      expect(maxInput).toHaveValue("100");
    });
  });
});

describe("Given a Range component min input", () => {
  describe("When initial value is 1 and max is 100", () => {
    describe("And the user introduces 500 in the min input", () => {
      test("Then should put 99 as the input value", () => {
        renderComponentFactory(<Range min={1} max={100} />);

        const minInput = screen.getByTestId("input-min");

        fireEvent.change(minInput, {
          target: {
            value: "500",
          },
        });

        fireEvent.blur(minInput);

        expect(minInput).toHaveValue("99");
      });
    });

    describe("And the user deletes all in the min input", () => {
      test("Then should put 0 as the input value", () => {
        renderComponentFactory(<Range min={1} max={100} />);

        const minInput = screen.getByTestId("input-min");

        fireEvent.change(minInput, {
          target: {
            value: "",
          },
        });

        fireEvent.blur(minInput);

        expect(minInput).toHaveValue("0");
      });
    });

    describe("And the user introduces letters in the min input", () => {
      test("Then should put 0 as the input value", () => {
        renderComponentFactory(<Range min={1} max={100} />);

        const minInput = screen.getByTestId("input-min");

        fireEvent.change(minInput, {
          target: {
            value: "haha",
          },
        });

        fireEvent.blur(minInput);

        expect(minInput).toHaveValue("0");
      });
    });

    describe("And the user introduces letters after the value in the min input", () => {
      test("Then should put the same value as the input value", () => {
        renderComponentFactory(<Range min={1} max={100} />);

        const minInput = screen.getByTestId("input-min");

        fireEvent.change(minInput, {
          target: {
            value: "50g",
          },
        });

        fireEvent.blur(minInput);

        expect(minInput).toHaveValue("50");
      });
    });

    describe("And the user introduces 50 in the min input", () => {
      test("Then should put 50 as the input value", () => {
        renderComponentFactory(<Range min={1} max={100} />);

        const minInput = screen.getByTestId("input-min");

        fireEvent.change(minInput, {
          target: {
            value: "50",
          },
        });

        fireEvent.blur(minInput);

        expect(minInput).toHaveValue("50");
      });
    });
  });
});

describe("Given a Range component max input", () => {
  describe("When initial value is 1 and max is 100", () => {
    beforeEach(() => {
      renderComponentFactory(<Range min={1} max={100} />);
    });

    describe("And the user introduces 0 in the max input", () => {
      test("Then should put 2 as the input value", () => {
        const maxInput = screen.getByTestId("input-max");

        fireEvent.change(maxInput, {
          target: {
            value: "0",
          },
        });

        fireEvent.blur(maxInput);

        expect(maxInput).toHaveValue("2");
      });
    });

    describe("And the user delete all in the max input", () => {
      test("Then should put 2 as the input value", () => {
        const maxInput = screen.getByTestId("input-max");

        fireEvent.change(maxInput, {
          target: {
            value: "",
          },
        });

        fireEvent.blur(maxInput);

        expect(maxInput).toHaveValue("2");
      });
    });

    describe("And the user introduces letters in the max input", () => {
      test("Then should put 2 as the input value", () => {
        const maxInput = screen.getByTestId("input-max");

        fireEvent.change(maxInput, {
          target: {
            value: "haha",
          },
        });

        fireEvent.blur(maxInput);

        expect(maxInput).toHaveValue("2");
      });
    });

    describe("And the user introduces 120g in the max input", () => {
      test("Then should put 120 as the input value", () => {
        const maxInput = screen.getByTestId("input-max");

        fireEvent.change(maxInput, {
          target: {
            value: "120g",
          },
        });

        fireEvent.blur(maxInput);

        expect(maxInput).toHaveValue("120");
      });
    });

    describe("And the user introduces 120 in the max input", () => {
      test("Then should put 120 as the input value", () => {
        const maxInput = screen.getByTestId("input-max");

        fireEvent.change(maxInput, {
          target: {
            value: "120",
          },
        });

        fireEvent.blur(maxInput);

        expect(maxInput).toHaveValue("120");
      });
    });
  });
});
