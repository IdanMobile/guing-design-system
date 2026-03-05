// MultiFunctionButton.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
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
    state: {
      control: {
        type: 'select',
        options: ['normal', 'pressed', 'disabled'],
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story = (args) => <MultiFunctionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  variant: 'default',
  state: 'normal',
};

export const Flat = Template.bind({});
Flat.args = {
  size: 'medium',
  variant: 'flat',
  state: 'normal',
};

export const Stroked = Template.bind({});
Stroked.args = {
  size: 'medium',
  variant: 'stroked',
  state: 'normal',
};

export const Basic = Template.bind({});
Basic.args = {
  size: 'medium',
  variant: 'basic',
  state: 'normal',
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'medium',
  variant: 'default',
  state: 'disabled',
};

export const Pressed = Template.bind({});
Pressed.args = {
  size: 'medium',
  variant: 'default',
  state: 'pressed',
};