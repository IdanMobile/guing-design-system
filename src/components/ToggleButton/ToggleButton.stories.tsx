// ToggleButton.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import ToggleButton from './ToggleButton';

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  argTypes: {
    isActive: {
      control: 'boolean',
      description: 'The current state of the toggle button.',
    },
    onClick: { action: 'clicked' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'The size of the button.',
    },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'flat', 'stroked'],
      },
      description: 'The variant of the button.',
    },
    className: {
      control: 'text',
      description: 'Additional class names to apply to the button.',
    },
  },
} as Meta;

const Template: Story = (args) => <ToggleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  isActive: false,
  size: 'medium',
  variant: 'default',
};

export const Active = Template.bind({});
Active.args = {
  isActive: true,
  size: 'medium',
  variant: 'default',
};