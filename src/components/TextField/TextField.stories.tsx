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

export const Small: Story = {
  args: { size: 'sm' },
};

export const Medium: Story = {
  args: { size: 'md' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const DefaultVariant: Story = {
  args: { variant: 'default' },
};

export const FlatVariant: Story = {
  args: { variant: 'flat' },
};

export const StrokedVariant: Story = {
  args: { variant: 'stroked' },
};

export const BasicVariant: Story = {
  args: { variant: 'basic' },
};

export const DefaultState: Story = {
  args: { state: 'default' },
};

export const PressedState: Story = {
  args: { state: 'pressed' },
};

export const DisabledState: Story = {
  args: { state: 'disabled' },
};
