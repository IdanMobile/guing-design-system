import type { Meta, StoryObj } from '@storybook/react';
import { Icons } from './Icons';

const meta = {
  title: 'System/Tokens/Icons',
  component: Icons,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Icons>;

export default meta;
export const Default: StoryObj<typeof Icons> = {};
