import type { Meta, StoryObj } from '@storybook/react';
import { Shadows } from './Shadows';

const meta = {
  title: 'System/Tokens/Shadows',
  component: Shadows,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Shadows>;

export default meta;
export const Default: StoryObj<typeof Shadows> = {};
