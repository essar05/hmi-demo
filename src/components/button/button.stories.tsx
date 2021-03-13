import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button, IButtonProps } from "./button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {}
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Button"
};