import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Carousel as CCarousel, ICarouselProps } from "./carousel";

export default {
  title: "Components/Carousel",
  component: CCarousel,
  decorators: [(Story) => <div className="hmi-sb hmi-sb-padded"><Story/></div>],
  argTypes: {}
} as Meta;

const Template: Story<ICarouselProps> = (args) => <CCarousel {...args} />;

export const Carousel = Template.bind({});
Carousel.args = {
  children: ["one", "two"]
};