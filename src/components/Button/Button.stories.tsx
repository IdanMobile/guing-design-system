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
  children: 'Button',
  variant: 'default',
  size: 'medium',
  disabled: false,
};

export const Flat = Template.bind({});
Flat.args = {
  children: 'Button',
  variant: 'flat',
  size: 'medium',
  disabled: false,
};

export const Stroked = Template.bind({});
Stroked.args = {
  children: 'Button',
  variant: 'stroked',
  size: 'medium',
  disabled: false,
};

export const Basic = Template.bind({});
Basic.args = {
  children: 'Button',
  variant: 'basic',
  size: 'medium',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  variant: 'default',
  size: 'medium',
  disabled: true,
};
