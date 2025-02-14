import React from 'react';
import { Meta } from '@storybook/react';
import { CheckCircleIcon, ReportProblemIcon, PlaceholderIcon } from '../../src/svgIcons';
import { TertiaryIconButton } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/TertiaryIconButton',
  component: TertiaryIconButton
} as Meta<typeof TertiaryIconButton>;

export const MediumBasicVariant = {
  args: {
    icon: <PlaceholderIcon />,
    onClick: () => console.log('button clicked!')
  }
};

export const LargeBasicVariant = {
  args: {
    icon: <PlaceholderIcon />,
    size: 'large',
    onClick: () => console.log('button clicked!')
  }
};

export const Disabled = {
  args: {
    icon: <PlaceholderIcon />,
    size: 'large',
    disabled: true,
    onClick: () => console.log('button clicked!')
  }
};

export const SuccessVariant = {
  args: {
    variant: 'success',
    size: 'large',
    icon: <CheckCircleIcon />,
    onClick: () => console.log('button clicked!')
  }
};

export const WarningVariant = {
  args: {
    variant: 'warning',
    size: 'large',
    icon: <ReportProblemIcon />,
    onClick: () => console.log('button clicked!')
  }
};

export const NeutralVariant = {
  args: {
    variant: 'neutral',
    size: 'large',
    icon: <PlaceholderIcon />,
    onClick: () => console.log('button clicked!')
  }
};
