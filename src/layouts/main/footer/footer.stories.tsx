import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Footer as CFooter, IFooterProps } from "./footer";

export default {
  title: "Layouts/Main/Components/Footer",
  component: CFooter,
  decorators: [(Story) => <div className="hmi-sb"><Story/></div>],
  argTypes: {}
} as Meta;

const Template: Story<IFooterProps> = (args) => <CFooter {...args} />;

export const Footer = Template.bind({});
Footer.args = {};