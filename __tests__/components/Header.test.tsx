import React from "react";
import { render } from "@testing-library/react";

import Header from "../../app/components/Header";

describe("Header", () => {
  it("renders without errors", () => {
    render(<Header />);
  });

  it("renders the navigation bar", () => {
    const { getByRole } = render(<Header />);
    const nav = getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
});
