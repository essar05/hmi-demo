import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

test("renders", () => {
  render(<Button label="Test" />);
  const element = screen.getByText(/Test/i);
  expect(element).toBeInTheDocument();
});