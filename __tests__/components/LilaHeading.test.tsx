import React from "react";
import { render, screen } from "@testing-library/react";

import LilaHeading from "../../app/components/LilaHeading";

describe("LilaHeading", () => {
  it("renders without errors", () => {
    render(<LilaHeading />);
  });
});
