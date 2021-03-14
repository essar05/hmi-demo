import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { CurrentTime as CCurrentTime, CurrentTimeProps } from "./current-time";

export default {
  title: "Components/Current Time",
  component: CCurrentTime,
  decorators: [(Story) => <div className="hmi-sb hmi-sb-padded"><Story/></div>],
  argTypes: {}
} as Meta;

const Template: Story<CurrentTimeProps> = (args) => <CCurrentTime {...args} />;

export const CurrentTime = Template.bind({});
CurrentTime.args = {};