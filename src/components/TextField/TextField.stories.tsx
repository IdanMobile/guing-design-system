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
        options: ['default', 'flat', 'stroked'],
      },
    },
    state: {
      control: {
        type: 'select',
        options: ['normal', 'disabled', 'error'],
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
  variant: 'default',
  state: 'normal',
  placeholder: 'Enter text...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'medium',
  variant: 'default',
  state: 'disabled',
  placeholder: 'Disabled input',
};

export const Error = Template.bind({});
Error.args = {
  size: 'medium',
  variant: 'default',
  state: 'error',
  placeholder: 'Error state',
};
