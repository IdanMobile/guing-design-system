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
  pressed: false,
  disabled: false,
};

export const Flat = Template.bind({});
Flat.args = {
  variant: 'flat',
  pressed: false,
  disabled: false,
};

export const Stroked = Template.bind({});
Stroked.args = {
  variant: 'stroked',
  pressed: false,
  disabled: false,
};

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  pressed: false,
  disabled: false,
};

export const Pressed = Template.bind({});
Pressed.args = {
  variant: 'default',
  pressed: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'default',
  pressed: false,
  disabled: true,
};
