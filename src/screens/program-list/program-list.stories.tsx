import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ProgramList as CProgramList, IProgramListProps } from "./program-list";

export default {
  title: "Screens/Program List",
  component: CProgramList,
  decorators: [(Story) => <div className="hmi-sb"><Story/></div>],
  argTypes: {}
} as Meta;

const Template: Story<IProgramListProps> = (args) => <CProgramList {...args} />;

export const ProgramList = Template.bind({});
ProgramList.args = {};