import type { Meta, StoryObj } from '@storybook/react';
import { Radius } from './Radius';

const meta = {
  title: 'System/Tokens/Radius',
  component: Radius,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Radius>;

export default meta;
export const Default: StoryObj<typeof Radius> = {};
