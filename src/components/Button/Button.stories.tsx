import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Click me',
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

export const Toggle: Story = {
  args: { variant: 'toggle' },
};

export const Multi: Story = {
  args: { variant: 'multi' },
};

export const Pressed: Story = {
  args: { variant: 'pressed' },
};

export const Disabled: Story = {
  args: { variant: 'disabled' },
};

export const Icon: Story = {
  args: { variant: 'icon' },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Medium: Story = {
  args: { size: 'md' },
};

export const Large: Story = {
  args: { size: 'lg' },
};