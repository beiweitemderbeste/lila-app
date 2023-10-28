import React from "react";
import { render, screen } from "@testing-library/react";

import MenuContainer from "../../app/components/MenuContainer";

describe("MenuContainer", () => {
  it("renders two BigMenuButton components", () => {
    const { getAllByRole } = render(<MenuContainer />);
    const buttons = getAllByRole("button");

    // Assuming there are two buttons in the MenuContainer
    expect(buttons).toHaveLength(2);
  });
  it("renders two BigMenuButton components with 'login' and 'register' text", () => {
    render(<MenuContainer />);

    const loginButton = screen.getByText("login");
    const registerButton = screen.getByText("register");

    expect(loginButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });
});
