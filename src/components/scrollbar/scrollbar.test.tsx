import React from "react";
import { render } from "@testing-library/react";
import { Scrollbar } from "./scrollbar";

test("renders", () => {
  render(<Scrollbar progress={0} />);
});