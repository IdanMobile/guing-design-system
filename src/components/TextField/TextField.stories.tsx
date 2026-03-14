// TextField.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import TextField, { TextFieldProps } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'disabled'],
    },
  },
};

export default meta;

const Template: StoryObj<typeof meta> = (args) => <TextField {...args} />;

export const Default: StoryObj<typeof meta> = Template.bind({});
Default.args = {
  size: 'medium',
  variant: 'outlined',
  state: 'default',
  placeholder: 'Enter text',
};

export const Error: StoryObj<typeof meta> = Template.bind({});
Error.args = {
  size: 'medium',
  variant: 'outlined',
  state: 'error',
  placeholder: 'Enter text',
};

export const Disabled: StoryObj<typeof meta> = Template.bind({});
Disabled.args = {
  size: 'medium',
  variant: 'outlined',
  state: 'disabled',
  placeholder: 'Enter text',
};
