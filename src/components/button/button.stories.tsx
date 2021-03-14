import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button as CButton, IButtonProps } from "./button";

export default {
  title: "Components/Button",
  component: CButton,
  decorators: [(Story) => <div className="hmi-sb hmi-sb-padded"><Story/></div>],
  argTypes: {}
} as Meta;

const Template: Story<IButtonProps> = (args) => <CButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  label: "Button"
};