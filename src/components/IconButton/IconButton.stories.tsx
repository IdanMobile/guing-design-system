// IconButton.stories.tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton from './IconButton';
import { FaBeer } from 'react-icons/fa';

export default {
  title: 'Components/IconButton',
  component: IconButton,
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
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <FaBeer />, // Example icon
  size: 'medium',
  variant: 'default',
  disabled: false,
};

export const Flat = Template.bind({});
Flat.args = {
  icon: <FaBeer />, // Example icon
  size: 'medium',
  variant: 'flat',
  disabled: false,
};

export const Stroked = Template.bind({});
Stroked.args = {
  icon: <FaBeer />, // Example icon
  size: 'medium',
  variant: 'stroked',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: <FaBeer />, // Example icon
  size: 'medium',
  variant: 'default',
  disabled: true,
};