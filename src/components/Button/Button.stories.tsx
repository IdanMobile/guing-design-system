import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Click me' },
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

export const Pressed: Story = {
  args: { pressed: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithIcon: Story = {
  args: { withIcon: true },
};

export const LightDarkToggle: Story = {
  args: { children: 'Toggle Mode', variant: 'default' },
};
