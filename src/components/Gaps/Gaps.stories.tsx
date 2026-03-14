import type { Meta, StoryObj } from '@storybook/react';
import { Gaps } from './Gaps';

const meta = {
  title: 'System/Tokens/Gaps',
  component: Gaps,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Gaps>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
