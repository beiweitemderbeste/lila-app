import React from "react";
import { render } from "@testing-library/react";

import BigMenuButton from "../../app/components/BigMenuButton";

describe("BigMenuButton", () => {
  it("renders without errors", () => {
    render(<BigMenuButton buttonText="Login" />);
  });

  it("renders the button with the provided text", () => {
    const buttonText = "Login";
    const { getByText } = render(<BigMenuButton buttonText={buttonText} />);
    const button = getByText(buttonText);
    expect(button).toBeInTheDocument();
  });
});
