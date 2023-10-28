import React from "react";
import { render, screen } from "@testing-library/react";

import LilaHeading from "../../app/components/LilaHeading";

describe("LilaHeading", () => {
  it("renders heading lila", () => {
    render(<LilaHeading />);
    const headerElement = screen.getByText("lila");
    expect(headerElement).toBeInTheDocument();
  });
});
