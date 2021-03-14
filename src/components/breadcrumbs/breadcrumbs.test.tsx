import React from "react";
import { render } from "@testing-library/react";
import { Breadcrumbs } from "./breadcrumbs";

test("does not render anything for empty breadcrumb list", () => {
  const {container} = render(<Breadcrumbs items={[]}/>);

  expect(container.firstChild).toBeNull();
});

test("render a list of breadcrumbs", () => {
  const breadcrumbs = [
    {
      label: "Home"
    },
    {
      label: "Programmes"
    }
  ];
  const {container} = render(<Breadcrumbs items={breadcrumbs}/>);

  expect(container.firstChild?.childNodes).toHaveLength(2);
  expect(container.firstChild?.childNodes[0]).toHaveTextContent("Home");
  expect(container.firstChild?.childNodes[1]).toHaveTextContent("Programmes");
});