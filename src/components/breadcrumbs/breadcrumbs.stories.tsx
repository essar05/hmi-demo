import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Breadcrumbs, IBreadcrumbsProps } from "./breadcrumbs";
import { Icon, Icons } from "../icon/icon";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {}
} as Meta;

const Template: Story<IBreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: <Icon name={Icons.HOME} />
    },
    {
      label: "Programmes"
    },
    {
      label: "Favorites"
    }
  ]
};