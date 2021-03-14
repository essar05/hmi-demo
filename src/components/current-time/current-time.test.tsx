import React from "react";
import { render, screen } from "@testing-library/react";
import { CurrentTime } from "./current-time";
import { getCurrentTime } from "../../helpers/dateTime";

test("renders", () => {
  render(<CurrentTime />);

  const currentTimeElement = screen.getByText(getCurrentTime());
  expect(currentTimeElement).toBeInTheDocument();
});