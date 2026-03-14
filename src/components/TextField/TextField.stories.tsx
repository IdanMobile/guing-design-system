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
    variant: 'default',
    size: 'md',
    state: 'default',
  },
};

export const Flat: Story = {
  args: {
    variant: 'flat',
  },
};

export const Stroked: Story = {
  args: {
    variant: 'stroked',
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

export const Disabled: Story = {
  args: {
    state: 'disabled',
  },
};

export const Error: Story = {
  args: {
    state: 'error',
  },
};
