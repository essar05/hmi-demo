import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { IProgramProps, Program as CProgram } from "./program";
import { Icons } from "../icon/icon";

export default {
  title: "Components/Program",
  component: CProgram,
  decorators: [(Story) => <div className="hmi-sb hmi-sb-padded"><Story/></div>],
  argTypes: {}
} as Meta;

const Template: Story<IProgramProps> = (args) => <CProgram {...args} />;

export const Program = Template.bind({});
Program.args = {
  icon: Icons.AIRPLANE,
  title: "Title",
  subtitle: "Subtitle"
};