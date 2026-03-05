// TextField.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import TextField, { TextFieldProps } from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
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
        options: ['outlined', 'filled', 'standard'],
      },
    },
    state: {
      control: {
        type: 'select',
        options: ['default', 'hover', 'focused', 'disabled'],
      },
    },
    className: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  variant: 'outlined',
  state: 'default',
  placeholder: 'Enter text',
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
  state: 'hover',
};

export const Focused = Template.bind({});
Focused.args = {
  ...Default.args,
  state: 'focused',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  state: 'disabled',
};