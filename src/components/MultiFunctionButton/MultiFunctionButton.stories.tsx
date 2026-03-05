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
        options: ['default', 'flat', 'stroked'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<MultiFunctionButtonProps> = (args) => <MultiFunctionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  size: 'medium',
  variant: 'default',
  disabled: false,
};

export const Flat = Template.bind({});
Flat.args = {
  children: 'Flat Button',
  size: 'medium',
  variant: 'flat',
  disabled: false,
};

export const Stroked = Template.bind({});
Stroked.args = {
  children: 'Stroked Button',
  size: 'medium',
  variant: 'stroked',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  size: 'medium',
  variant: 'default',
  disabled: true,
};
