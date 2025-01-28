import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { PrimaryButton } from '../../src/components';
import { CheckCircleIcon, PlaceholderIcon, ReportProblemIcon } from '../../src/svgIcons';
import '../../src/styles/idsk3_theme.css';

const meta = {
  title: 'Atoms/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onClick: fn() }
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryBasic: Story = {
  args: {
    label: 'Primary / Basic'
  }
};

export const PrimaryBasicWithIcon: Story = {
  args: {
    label: 'Primary / Basic',
    icon: <PlaceholderIcon />
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true
  }
};

export const PrimarySuccessWithIcon: Story = {
  args: {
    label: 'Primary / Success',
    variant: 'success',
    icon: <CheckCircleIcon />,
    iconPosition: 'right'
  }
};

export const PrimaryWarningWithIcon: Story = {
  args: {
    label: 'Primary / Warning',
    variant: 'warning',
    icon: <ReportProblemIcon />
  }
};
