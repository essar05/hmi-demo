import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { MainLayout, IMainLayoutProps } from "./main-layout";

export default {
  title: "Components/Main Layout",
  component: MainLayout,
  argTypes: {}
} as Meta;

const Template: Story<IMainLayoutProps> = (args) => <MainLayout {...args} />;

export const Default = Template.bind({});
Default.args = {};