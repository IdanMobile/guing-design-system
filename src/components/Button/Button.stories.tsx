// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Click me',
    variant: 'default',
    size: 'md',
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: 'default' },
};

export const Flat: Story = {
  args: { variant: 'flat' },
};

export const Stroked: Story = {
  args: { variant: 'stroked' },
};

export const Basic: Story = {
  args: { variant: 'basic' },
};

export const Icon: Story = {
  args: { variant: 'icon' },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const Disabled: Story = {
  args: { disabled: true },
};
