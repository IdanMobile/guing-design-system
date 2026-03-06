import type { Meta, StoryObj } from '@storybook/react';
import { Spacing } from './Spacing';

const meta = {
  title: 'System/Tokens/Spacing',
  component: Spacing,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Spacing>;

export default meta;
export const Default: StoryObj<typeof Spacing> = {};
