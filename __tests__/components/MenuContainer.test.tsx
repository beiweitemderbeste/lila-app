import React from "react";
import { render } from "@testing-library/react";

import MenuContainer from "../../app/components/MenuContainer";

describe("MenuContainer", () => {
  it("renders without errors", () => {
    render(<MenuContainer />);
  });

  it("renders two BigMenuButton components", () => {
    const { getAllByRole } = render(<MenuContainer />);
    const buttons = getAllByRole("button");

    // Assuming there are two buttons in the MenuContainer
    expect(buttons).toHaveLength(2);
  });
});
