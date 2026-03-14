// MultiFunctionButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import MultiFunctionButton from './MultiFunctionButton';

const meta = {
  title: 'Components/MultiFunctionButton',
  component: MultiFunctionButton,
  args: {
    children: 'Click me',
  },
} satisfies Meta<typeof MultiFunctionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
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