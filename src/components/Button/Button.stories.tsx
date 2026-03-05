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
    pressed: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    icon: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  pressed: false,
  disabled: false,
  icon: false,
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

export const Icon = Template.bind({});
Icon.args = {
  icon: true,
};
