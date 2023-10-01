import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../app/page";

describe("Home", () => {
  it("it renders the welcome heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /lila/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

