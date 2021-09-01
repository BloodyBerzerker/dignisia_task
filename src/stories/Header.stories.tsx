import React from 'react';
import { Meta } from '@storybook/react';

import { Header } from '../components/header/Header';

export default {
  title: 'Header',
  component: Header,
} as Meta;

export const Primary = () => (
     <Header />
)
