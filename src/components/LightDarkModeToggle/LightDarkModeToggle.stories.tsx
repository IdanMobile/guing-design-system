// LightDarkModeToggle.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import LightDarkModeToggle, { LightDarkModeToggleProps } from './LightDarkModeToggle';

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
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
    },
  },
} as Meta;

const Template: Story<LightDarkModeToggleProps> = (args) => <LightDarkModeToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  variant: 'default',
  initialState: 'light',
};

export const Flat = Template.bind({});
Flat.args = {
  size: 'medium',
  variant: 'flat',
  initialState: 'light',
};

export const Stroked = Template.bind({});
Stroked.args = {
  size: 'medium',
  variant: 'stroked',
  initialState: 'light',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  variant: 'default',
  initialState: 'light',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  variant: 'default',
  initialState: 'light',
};
