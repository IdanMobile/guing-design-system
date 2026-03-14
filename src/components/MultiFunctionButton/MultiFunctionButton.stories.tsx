// MultiFunctionButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import MultiFunctionButton from './MultiFunctionButton';

const meta = {
  title: 'Components/MultiFunctionButton',
  component: MultiFunctionButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'radio',
      options: ['default', 'flat', 'stroked', 'basic'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof MultiFunctionButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Button',
    size: 'medium',
    variant: 'default',
    disabled: false,
  },
};

export const Flat: Story = {
  args: {
    children: 'Flat Button',
    size: 'medium',
    variant: 'flat',
    disabled: false,
  },
};

export const Stroked: Story = {
  args: {
    children: 'Stroked Button',
    size: 'medium',
    variant: 'stroked',
    disabled: false,
  },
};

export const Basic: Story = {
  args: {
    children: 'Basic Button',
    size: 'medium',
    variant: 'basic',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    size: 'medium',
    variant: 'default',
    disabled: true,
  },
};