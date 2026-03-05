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
  },
} as Meta;

const Template: Story<MultiFunctionButtonProps> = (args) => <MultiFunctionButton {...args}>Button</MultiFunctionButton>;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'medium',
  disabled: false,
};

export const Flat = Template.bind({});
Flat.args = {
  variant: 'flat',
  size: 'medium',
  disabled: false,
};

export const Stroked = Template.bind({});
Stroked.args = {
  variant: 'stroked',
  size: 'medium',
  disabled: false,
};

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  size: 'medium',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'default',
  size: 'medium',
  disabled: true,
};
