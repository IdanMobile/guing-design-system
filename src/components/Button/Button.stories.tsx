// Button.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'flat', 'stroked', 'basic', 'toggle', 'multi-function', 'pressed', 'disabled', 'icon'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'medium',
};

export const Flat = Template.bind({});
Flat.args = {
  variant: 'flat',
  size: 'medium',
};

export const Stroked = Template.bind({});
Stroked.args = {
  variant: 'stroked',
  size: 'medium',
};

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  size: 'medium',
};

export const Toggle = Template.bind({});
Toggle.args = {
  variant: 'toggle',
  size: 'medium',
};

export const MultiFunction = Template.bind({});
MultiFunction.args = {
  variant: 'multi-function',
  size: 'medium',
};

export const Pressed = Template.bind({});
Pressed.args = {
  variant: 'pressed',
  size: 'medium',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'disabled',
  size: 'medium',
  disabled: true,
};

export const Icon = Template.bind({});
Icon.args = {
  variant: 'icon',
  size: 'medium',
};