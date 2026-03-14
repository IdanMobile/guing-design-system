import type { Meta, StoryObj } from '@storybook/react';
import { Sizes } from './Sizes';

const meta = {
  title: 'System/Tokens/Sizes',
  component: Sizes,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Sizes>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
