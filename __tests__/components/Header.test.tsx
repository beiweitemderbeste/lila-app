import React from "react";
import { render } from "@testing-library/react";

import Header from "../../app/components/Header";

describe("Header", () => {
  it("renders without errors", () => {
    render(<Header />);
  });
});
