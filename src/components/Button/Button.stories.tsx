// Button.stories.tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

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
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'medium',
  children: 'Button',
};

export const Flat = Template.bind({});
Flat.args = {
  variant: 'flat',
  size: 'medium',
  children: 'Button',
};

export const Stroked = Template.bind({});
Stroked.args = {
  variant: 'stroked',
  size: 'medium',
  children: 'Button',
};

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  size: 'medium',
  children: 'Button',
};

export const Toggle = Template.bind({});
Toggle.args = {
  variant: 'toggle',
  size: 'medium',
  children: 'Button',
};

export const MultiFunction = Template.bind({});
MultiFunction.args = {
  variant: 'multi-function',
  size: 'medium',
  children: 'Button',
};

export const Pressed = Template.bind({});
Pressed.args = {
  variant: 'pressed',
  size: 'medium',
  children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'disabled',
  size: 'medium',
  children: 'Button',
  disabled: true,
};

export const Icon = Template.bind({});
Icon.args = {
  variant: 'icon',
  size: 'medium',
  children: '🔍',
};
