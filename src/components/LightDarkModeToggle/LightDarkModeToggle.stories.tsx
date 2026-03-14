// LightDarkModeToggle.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { LightDarkModeToggle } from './LightDarkModeToggle';

const meta = {
  title: 'Components/LightDarkModeToggle',
  component: LightDarkModeToggle,
  args: { size: 'md', variant: 'default', disabled: false },
} satisfies Meta<typeof LightDarkModeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const Flat: Story = {
  args: { variant: 'flat' },
};

export const Stroked: Story = {
  args: { variant: 'stroked' },
};

export const Disabled: Story = {
  args: { disabled: true },
};
