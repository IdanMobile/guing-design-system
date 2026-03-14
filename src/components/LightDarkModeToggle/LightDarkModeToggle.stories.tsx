// LightDarkModeToggle.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { LightDarkModeToggle } from './LightDarkModeToggle';

const meta = {
  title: 'Components/LightDarkModeToggle',
  component: LightDarkModeToggle,
  args: {
    initialState: false,
  },
} satisfies Meta<typeof LightDarkModeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'default',
  },
};

export const SmallFlat: Story = {
  args: {
    size: 'sm',
    variant: 'flat',
  },
};

export const LargeDefault: Story = {
  args: {
    size: 'lg',
    variant: 'default',
  },
};

export const DarkModeInitial: Story = {
  args: {
    initialState: true,
  },
};
