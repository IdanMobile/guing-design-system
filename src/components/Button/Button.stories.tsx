// Button.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps, ButtonVariant } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'flat', 'stroked', 'basic', 'toggle', 'multi', 'pressed', 'disabled', 'icon'],
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

export const Toggle = Template.bind({});
Toggle.args = {
  variant: 'toggle',
  children: 'Toggle Button',
};

export const Multi = Template.bind({});
Multi.args = {
  variant: 'multi',
  children: 'Multi-function Button',
};

export const Pressed = Template.bind({});
Pressed.args = {
  variant: 'pressed',
  children: 'Pressed Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'disabled',
  children: 'Disabled Button',
  disabled: true,
};

export const Icon = Template.bind({});
Icon.args = {
  variant: 'icon',
  children: 'Icon Button',
};