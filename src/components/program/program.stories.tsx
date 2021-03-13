import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Program, ProgramProps } from "./program";

export default {
  title: "Components/Program",
  component: Program,
  argTypes: {}
} as Meta;

const Template: Story<ProgramProps> = (args) => <Program {...args} />;

export const Default = Template.bind({});
Default.args = {};