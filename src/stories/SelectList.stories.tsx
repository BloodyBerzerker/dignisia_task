import React from 'react';
import { Story, Meta, ComponentStory, ComponentMeta } from '@storybook/react';
import SelectList from '../components/selectList/SelectList';

export default {
  title: 'SelectList',
  component: SelectList,
} as ComponentMeta<typeof SelectList>;

export const Basic: Story = (args) => <SelectList initialSegmentOption={1} segmentOptions={[{class: 'topLayer', id: 1, name: 'All Countries'}, {class: 'secondLayer', id: 2, name: 'Sweden'}, {class: 'thirdLayer', id: 3, name: 'Invoice'}, {class: 'thirdLayer', id: 4, name: 'Credit Card'}, {class: 'thirdLayer', id: 5, name: 'Loan'}]}/>;
