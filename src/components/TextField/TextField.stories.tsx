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
        options: ['default', 'light', 'dark'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
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
  variant: 'default',
  size: 'medium',
  placeholder: 'Enter text',
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  size: 'medium',
  placeholder: 'Enter text',
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  size: 'medium',
  placeholder: 'Enter text',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'default',
  size: 'small',
  placeholder: 'Enter text',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'default',
  size: 'large',
  placeholder: 'Enter text',
};
