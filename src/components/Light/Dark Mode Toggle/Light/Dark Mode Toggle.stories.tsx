// LightDarkModeToggle.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
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
    className: {
      control: 'text',
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

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'medium',
  variant: 'default',
  disabled: true,
};

export const Flat = Template.bind({});
Flat.args = {
  size: 'medium',
  variant: 'flat',
  disabled: false,
};

export const Stroked = Template.bind({});
Stroked.args = {
  size: 'medium',
  variant: 'stroked',
  disabled: false,
};