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
        options: ['filled', 'outlined', 'standard'],
      },
    },
    state: {
      control: {
        type: 'select',
        options: ['default', 'error', 'disabled'],
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

export const ErrorState = Template.bind({});
ErrorState.args = {
  size: 'medium',
  variant: 'outlined',
  state: 'error',
  placeholder: 'Error state',
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  size: 'medium',
  variant: 'outlined',
  state: 'disabled',
  placeholder: 'Disabled state',
};