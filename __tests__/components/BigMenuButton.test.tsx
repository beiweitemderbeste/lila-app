import React from "react";
import { render } from "@testing-library/react";

import BigMenuButton from "../../app/components/BigMenuButton";

describe("BigMenuButton", () => {
  it("renders without errors", () => {
    render(<BigMenuButton buttonText="Login" />);
  });
});
