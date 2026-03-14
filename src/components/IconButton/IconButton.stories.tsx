// IconButton.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import IconButton, { IconButtonProps } from './IconButton';
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
        options: ['default', 'primary', 'secondary'],
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <FaBeer />, // Example icon
  size: 'medium',
  variant: 'default',
  disabled: false,
};

export const Primary = Template.bind({});
Primary.args = {
  icon: <FaBeer />, // Example icon
  size: 'medium',
  variant: 'primary',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  icon: <FaBeer />, // Example icon
  size: 'medium',
  variant: 'secondary',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: <FaBeer />, // Example icon
  size: 'medium',
  variant: 'default',
  disabled: true,
};
