import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../app/components/Header";
import MenuContainer from "../app/components/MenuContainer";

describe("Header", () => {
  it("renders without errors", () => {
    render(<Header />);
  });
});

describe("MenuContainer", () => {
  it("renders without errors", () => {
    render(<MenuContainer />);
  });
});
