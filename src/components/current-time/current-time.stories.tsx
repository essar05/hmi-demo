import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { CurrentTime, CurrentTimeProps } from "./current-time";

export default {
  title: "Components/Current Time",
  component: CurrentTime,
  argTypes: {}
} as Meta;

const Template: Story<CurrentTimeProps> = (args) => <CurrentTime {...args} />;

export const Default = Template.bind({});
Default.args = {};