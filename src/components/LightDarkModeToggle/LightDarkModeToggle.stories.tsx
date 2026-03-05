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
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story = (args) => <LightDarkModeToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  variant: 'default',
  disabled: false,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};