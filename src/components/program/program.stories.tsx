import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Program as CProgram, IProgramProps } from "./program";

export default {
  title: "Components/Program",
  component: CProgram,
  decorators: [(Story) => <div className="hmi-sb hmi-sb-padded"><Story/></div>],
  argTypes: {}
} as Meta;

const Template: Story<IProgramProps> = (args) => <CProgram {...args} />;

export const Program = Template.bind({});
Program.args = {};