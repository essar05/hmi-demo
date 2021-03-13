import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { MainLayout, MainLayoutProps } from "./main-layout";

export default {
  title: "Components/Carousel",
  component: MainLayout,
  argTypes: {}
} as Meta;

const Template: Story<MainLayoutProps> = (args) => <MainLayout {...args} />;

export const Default = Template.bind({});
Default.args = {};