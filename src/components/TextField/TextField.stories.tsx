// TextField.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  args: {
    placeholder: 'Enter text',
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'outlined',
    state: 'default',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};

export const ErrorState: Story = {
  args: {
    state: 'error',
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
  },
};