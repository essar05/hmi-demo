import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Breadcrumbs as CBreadcrumbs, IBreadcrumbsProps } from "./breadcrumbs";

export default {
  title: "Components/Breadcrumbs",
  component: CBreadcrumbs,
  decorators: [(Story) => <div className="hmi-sb hmi-sb-padded"><Story/></div>],
  argTypes: {
    items: {
      control: "object"
    }
  }
} as Meta;

const Template: Story<IBreadcrumbsProps> = (args) => <CBreadcrumbs {...args} />;

export const Breadcrumbs = Template.bind({});
Breadcrumbs.args = {
  items: [
    {
      label: "Home"
    },
    {
      label: "Programmes"
    },
    {
      label: "Favorites"
    }
  ]
};