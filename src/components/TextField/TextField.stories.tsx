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
    state: 'enabled',
  },
};

export const Flat: Story = {
  args: {
    variant: 'flat',
    size: 'md',
    state: 'enabled',
  },
};

export const Stroked: Story = {
  args: {
    variant: 'stroked',
    size: 'md',
    state: 'enabled',
  },
};

export const Basic: Story = {
  args: {
    variant: 'basic',
    size: 'md',
    state: 'enabled',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'md',
    state: 'disabled',
  },
};

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    state: 'enabled',
  },
};

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    state: 'enabled',
  },
};
