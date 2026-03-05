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
        options: ['default', 'dialog', 'section'],
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
};

export const DialogVariant = Template.bind({});
DialogVariant.args = {
  variant: 'dialog',
  size: 'medium',
  disabled: false,
};

export const SectionVariant = Template.bind({});
SectionVariant.args = {
  variant: 'section',
  size: 'medium',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'default',
  size: 'medium',
  disabled: true,
};
