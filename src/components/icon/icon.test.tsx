import React from "react";
import { render } from "@testing-library/react";
import { Icon, Icons } from "./icon";

test("renders", () => {
  const { container } = render(<Icon name={Icons.AIRPLANE} />);
  expect(container.firstChild).toHaveClass("fa fa-airplane");
});