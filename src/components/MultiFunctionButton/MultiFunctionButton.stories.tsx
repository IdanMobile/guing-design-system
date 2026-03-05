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
    pressed: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<MultiFunctionButtonProps> = (args) => <MultiFunctionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  variant: 'default',
  pressed: false,
  disabled: false,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Pressed = Template.bind({});
Pressed.args = {
  pressed: true,
};
