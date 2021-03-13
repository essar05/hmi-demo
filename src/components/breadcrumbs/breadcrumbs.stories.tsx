import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Breadcrumbs, BreadcrumbsProps } from "./breadcrumbs";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {}
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {};