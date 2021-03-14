import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Content as CContent, IContentProps } from "./content";

export default {
  title: "Layouts/Main/Components/Content",
  component: CContent,
  decorators: [(Story) => <div className="hmi-sb"><Story/></div>],
  argTypes: {}
} as Meta;

const Template: Story<IContentProps> = (args) => <CContent {...args} />;

export const Content = Template.bind({});
Content.args = {};