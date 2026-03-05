// MultiFunctionButton.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import MultiFunctionButton, { MultiFunctionButtonProps } from './MultiFunctionButton';

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
    className: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<MultiFunctionButtonProps> = (args) => <MultiFunctionButton {...args}>Button</MultiFunctionButton>;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  variant: 'default',
  disabled: false,
};

export const Flat = Template.bind({});
Flat.args = {
  size: 'medium',
  variant: 'flat',
  disabled: false,
};

export const Stroked = Template.bind({});
Stroked.args = {
  size: 'medium',
  variant: 'stroked',
  disabled: false,
};

export const Basic = Template.bind({});
Basic.args = {
  size: 'medium',
  variant: 'basic',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'medium',
  variant: 'default',
  disabled: true,
};