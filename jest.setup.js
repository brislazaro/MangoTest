import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  jest.clearAllMocks();
  cleanup();
});
