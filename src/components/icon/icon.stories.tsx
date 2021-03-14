import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Icon as CIcon, IIconProps, Icons } from "./icon";

export default {
  title: "Components/Icon",
  component: CIcon,
  decorators: [(Story) => <div className="hmi-sb hmi-sb-padded"><Story/></div>],
  argTypes: {}
} as Meta;

const Template: Story<IIconProps> = (args) => <CIcon {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  name: Icons.HOME
};