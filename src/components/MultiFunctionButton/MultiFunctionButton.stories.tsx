// MultiFunctionButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MultiFunctionButton } from './MultiFunctionButton';

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
    size: 'md',
    pressed: false,
    disabled: false,
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

export const Basic: Story = {
  args: {
    variant: 'basic',
  },
};

export const Pressed: Story = {
  args: {
    pressed: true,
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
