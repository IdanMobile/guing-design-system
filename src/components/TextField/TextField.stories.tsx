// TextField.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import TextField, { TextFieldProps } from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'flat', 'stroked'],
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
    className: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'medium',
  disabled: false,
  placeholder: 'Enter text...',
};

export const Flat = Template.bind({});
Flat.args = {
  variant: 'flat',
  size: 'medium',
  disabled: false,
  placeholder: 'Enter text...',
};

export const Stroked = Template.bind({});
Stroked.args = {
  variant: 'stroked',
  size: 'medium',
  disabled: false,
  placeholder: 'Enter text...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'default',
  size: 'medium',
  disabled: true,
  placeholder: 'Disabled',
};