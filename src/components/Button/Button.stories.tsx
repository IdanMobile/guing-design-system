// Button.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'flat', 'stroked', 'basic', 'icon'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

const Template: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'medium',
    disabled: false,
  },
};

export const Default: StoryObj<ButtonProps> = {
  ...Template,
};

export const Flat: StoryObj<ButtonProps> = {
  ...Template,
  args: {
    ...Template.args,
    variant: 'flat',
  },
};

export const Stroked: StoryObj<ButtonProps> = {
  ...Template,
  args: {
    ...Template.args,
    variant: 'stroked',
  },
};

export const Basic: StoryObj<ButtonProps> = {
  ...Template,
  args: {
    ...Template.args,
    variant: 'basic',
  },
};

export const Icon: StoryObj<ButtonProps> = {
  ...Template,
  args: {
    ...Template.args,
    variant: 'icon',
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  ...Template,
  args: {
    ...Template.args,
    disabled: true,
  },
};