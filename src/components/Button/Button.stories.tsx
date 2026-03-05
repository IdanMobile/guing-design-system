// Button.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'flat', 'stroked', 'basic'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'medium',
  disabled: false,
  children: 'Button',
};

export const Flat = Template.bind({});
Flat.args = {
  variant: 'flat',
  size: 'medium',
  disabled: false,
  children: 'Button',
};

export const Stroked = Template.bind({});
Stroked.args = {
  variant: 'stroked',
  size: 'medium',
  disabled: false,
  children: 'Button',
};

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  size: 'medium',
  disabled: false,
  children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'default',
  size: 'medium',
  disabled: true,
  children: 'Button',
};