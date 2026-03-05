// MultiFunctionButton.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import MultiFunctionButton, { MultiFunctionButtonProps } from './MultiFunctionButton';

export default {
  title: 'Components/MultiFunctionButton',
  component: MultiFunctionButton,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'flat', 'stroked', 'basic'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    pressed: {
      control: 'boolean',
    },
    icon: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<MultiFunctionButtonProps> = (args) => <MultiFunctionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  variant: 'default',
  size: 'medium',
  disabled: false,
  pressed: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Button',
  variant: 'default',
  size: 'medium',
  disabled: false,
  pressed: false,
  icon: '🔍',
};