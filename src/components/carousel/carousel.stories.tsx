import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Carousel, CarouselProps } from "./carousel";

export default {
  title: "Components/Carousel",
  component: Carousel,
  argTypes: {}
} as Meta;

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {};