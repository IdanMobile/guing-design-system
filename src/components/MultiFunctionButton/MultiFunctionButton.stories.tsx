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
    disabled: {
      control: 'boolean',
    },
    toggleMode: {
      control: 'boolean',
    },
    icon: {
      control: 'text',
    },
    className: {
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
  toggleMode: false,
  icon: null,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: '🔔',
};