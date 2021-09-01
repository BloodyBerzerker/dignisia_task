import React from 'react';
import { Story, Meta, ComponentStory, ComponentMeta } from '@storybook/react';
import Slider from '../components/slider/Slider';

export default {
  title: 'Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

export const Basic: Story = (args) => <Slider sliderTitle='Case Age' sliderDates={['2020-01-01', '2020-02-01', '2020-03-01', '2020-04-01']} sliderValue={0} {...args}/>;
