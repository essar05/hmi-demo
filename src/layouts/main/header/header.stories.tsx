import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Header as CHeader } from "./header";

export default {
  title: "Layouts/Main/Components/Header",
  component: CHeader,
  decorators: [(Story) => <div className="hmi-sb"><Story/></div>],
  argTypes: {}
} as Meta;

const Template: Story<Record<string, never>> = (args) => <CHeader {...args} />;

export const Header = Template.bind({});
Header.args = {};