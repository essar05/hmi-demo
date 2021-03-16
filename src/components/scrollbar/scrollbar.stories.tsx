import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { IScrollbarProps, Scrollbar as CScrollbar } from "./scrollbar";

export default {
  title: "Components/Scrollbar",
  component: CScrollbar,
  decorators: [(Story) => <div className="hmi-sb hmi-sb-padded"><Story/></div>],
  argTypes: {}
} as Meta;

const Template: Story<IScrollbarProps> = (args) => <CScrollbar {...args} />;

export const Scrollbar = Template.bind({});
Scrollbar.args = {
};