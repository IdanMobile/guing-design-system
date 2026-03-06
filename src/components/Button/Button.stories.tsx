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
        options: ['default', 'flat', 'stroked', 'basic', 'icon'],
      },
    },
    pressed: {
      control: 'boolean',
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
  children: 'Default Button',
};

export const Flat = Template.bind({});
Flat.args = {
  variant: 'flat',
  children: 'Flat Button',
};

export const Stroked = Template.bind({});
Stroked.args = {
  variant: 'stroked',
  children: 'Stroked Button',
};

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  children: 'Basic Button',
};

export const Icon = Template.bind({});
Icon.args = {
  variant: 'icon',
  children: 'Icon Button',
};

export const Pressed = Template.bind({});
Pressed.args = {
  variant: 'default',
  pressed: true,
  children: 'Pressed Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'default',
  disabled: true,
  children: 'Disabled Button',
};
