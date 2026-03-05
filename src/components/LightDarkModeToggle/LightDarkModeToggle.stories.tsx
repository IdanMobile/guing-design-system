// LightDarkModeToggle.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import LightDarkModeToggle from './LightDarkModeToggle';

export default {
  title: 'Components/LightDarkModeToggle',
  component: LightDarkModeToggle,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'flat', 'stroked'],
      },
    },
    initialState: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story = (args) => <LightDarkModeToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  variant: 'default',
  initialState: false,
};

export const Flat = Template.bind({});
Flat.args = {
  size: 'medium',
  variant: 'flat',
  initialState: false,
};

export const Stroked = Template.bind({});
Stroked.args = {
  size: 'medium',
  variant: 'stroked',
  initialState: false,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  variant: 'default',
  initialState: false,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  variant: 'default',
  initialState: false,
};
