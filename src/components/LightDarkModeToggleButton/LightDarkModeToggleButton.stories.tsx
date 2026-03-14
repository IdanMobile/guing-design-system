// LightDarkModeToggleButton.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import LightDarkModeToggleButton, { LightDarkModeToggleButtonProps } from './LightDarkModeToggleButton';

export default {
  title: 'Components/LightDarkModeToggleButton',
  component: LightDarkModeToggleButton,
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

const Template: Story<LightDarkModeToggleButtonProps> = (args) => <LightDarkModeToggleButton {...args} />;

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