// LightDarkModeToggle.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import LightDarkModeToggle, { LightDarkModeToggleProps } from './LightDarkModeToggle';

const meta: Meta<typeof LightDarkModeToggle> = {
  title: 'Components/LightDarkModeToggle',
  component: LightDarkModeToggle,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['default', 'flat', 'stroked'],
    },
    state: {
      control: 'select',
      options: ['default', 'pressed', 'disabled'],
    },
  },
};

export default meta satisfies Meta<typeof LightDarkModeToggle>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    variant: 'default',
    state: 'default',
  },
};

export const Flat: Story = {
  args: {
    size: 'medium',
    variant: 'flat',
    state: 'default',
  },
};

export const Stroked: Story = {
  args: {
    size: 'medium',
    variant: 'stroked',
    state: 'default',
  },
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    variant: 'default',
    state: 'disabled',
  },
};