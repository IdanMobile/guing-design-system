// MultiFunctionButton.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import MultiFunctionButton from './MultiFunctionButton';

export default {
  title: 'Components/MultiFunctionButton',
  component: MultiFunctionButton,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'flat', 'stroked', 'basic'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story = (args) => <MultiFunctionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  variant: 'default',
  disabled: false,
  children: 'Click Me',
};

export const Flat = Template.bind({});
Flat.args = {
  size: 'medium',
  variant: 'flat',
  disabled: false,
  children: 'Click Me',
};

export const Stroked = Template.bind({});
Stroked.args = {
  size: 'medium',
  variant: 'stroked',
  disabled: false,
  children: 'Click Me',
};

export const Basic = Template.bind({});
Basic.args = {
  size: 'medium',
  variant: 'basic',
  disabled: false,
  children: 'Click Me',
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'medium',
  variant: 'default',
  disabled: true,
  children: 'Click Me',
};