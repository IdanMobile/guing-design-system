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
        options: ['default', 'outlined', 'text'],
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

const Template: Story = (args) => <LightDarkModeToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  variant: 'default',
  initialState: 'light',
};

export const Outlined = Template.bind({});
Outlined.args = {
  size: 'medium',
  variant: 'outlined',
  initialState: 'light',
};

export const Text = Template.bind({});
Text.args = {
  size: 'medium',
  variant: 'text',
  initialState: 'light',
};