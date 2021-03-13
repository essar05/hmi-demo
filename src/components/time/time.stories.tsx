import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Time, TimeProps } from "./time";

export default {
  title: "Components/Program",
  component: Time,
  argTypes: {}
} as Meta;

const Template: Story<TimeProps> = (args) => <Time {...args} />;

export const Default = Template.bind({});
Default.args = {};