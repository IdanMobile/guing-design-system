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

export const LightVariant = Template.bind({});
LightVariant.args = {
  variant: 'light',
};

export const DarkVariant = Template.bind({});
DarkVariant.args = {
  variant: 'dark',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  size: 'small',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  size: 'large',
};