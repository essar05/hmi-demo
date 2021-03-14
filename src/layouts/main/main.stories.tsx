import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { MainLayout as CMainLayout, IMainLayoutProps } from "./main";

export default {
  title: "Layouts/Main",
  component: CMainLayout,
  decorators: [(Story) => <div className="hmi-sb"><Story/></div>],
  argTypes: {}
} as Meta;

const Template: Story<IMainLayoutProps> = (args) => <CMainLayout {...args} />;

export const Default = Template.bind({});
Default.args = {};