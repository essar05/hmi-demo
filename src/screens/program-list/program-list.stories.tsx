import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ProgramList as CProgramList, IProgramListProps } from "./program-list";
import { Icons } from "../../components/icon/icon";

export default {
  title: "Screens/Program List",
  component: CProgramList,
  decorators: [(Story) => <div className="hmi-sb"><Story/></div>],
  argTypes: {}
} as Meta;

const Template: Story<IProgramListProps> = (args) => <CProgramList {...args} />;

export const ProgramList = Template.bind({});
ProgramList.args = {
  programs: [
    {
      icon: Icons.AIRPLANE,
      title: "Dummy 1",
      subtitle: "Second Line"
    },
    {
      icon: Icons.PEOPLE,
      title: "Dummy 2"
    },
    {
      icon: Icons.FLAG,
      title: "Dummy 3"
    },
    {
      icon: Icons.UMBRELLA,
      title: "Dummy 4",
      subtitle: "Second Line"
    },
    {
      icon: Icons.AIRPLANE,
      title: "Dummy 5",
      subtitle: "Second Line"
    },
    {
      icon: Icons.UMBRELLA,
      title: "Dummy 6"
    },
    {
      icon: Icons.FLAG,
      title: "Dummy 7"
    },
    {
      icon: Icons.PEOPLE,
      title: "Dummy 8"
    }
  ]
};