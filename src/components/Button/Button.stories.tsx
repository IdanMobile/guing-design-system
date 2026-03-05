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
        options: ['default', 'flat', 'stroked', 'basic'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    pressed: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'medium',
  pressed: false,
  disabled: false,
};

export const Flat = Template.bind({});
Flat.args = {
  variant: 'flat',
};

export const Stroked = Template.bind({});
Stroked.args = {
  variant: 'stroked',
};

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
};

export const Pressed = Template.bind({});
Pressed.args = {
  pressed: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
