import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Icon, IIconProps, Icons } from "./icon";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {}
} as Meta;

const Template: Story<IIconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: Icons.HOME
};