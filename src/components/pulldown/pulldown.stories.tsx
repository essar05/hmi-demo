import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { IPulldownProps, Pulldown as CPulldown } from "./pulldown";

export default {
  title: "Components/Pulldown",
  component: CPulldown,
  decorators: [(Story) => <div className="hmi-sb hmi-sb-padded"><Story/></div>],
  argTypes: {}
} as Meta;

const Template: Story<IPulldownProps> = (args) => <CPulldown {...args} />;

export const Pulldown = Template.bind({});
Pulldown.args = {
  children: "Lorem ipsum dolor sit amet..."
};