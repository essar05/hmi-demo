import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ProgramList, IProgramListProps } from "./program-list";

export default {
  title: "Screens/Program List",
  component: ProgramList,
  argTypes: {}
} as Meta;

const Template: Story<IProgramListProps> = (args) => <ProgramList {...args} />;

export const Default = Template.bind({});
Default.args = {};