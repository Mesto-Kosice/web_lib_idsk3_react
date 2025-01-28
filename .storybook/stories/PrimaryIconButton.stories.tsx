import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PrimaryIconButton } from '../../src/components';
import { CheckCircleIcon, ReportProblemIcon, PlaceholderIcon } from '../../src/svgIcons';
import '../../src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/PrimaryIconButton',
  component: PrimaryIconButton
} as Meta<typeof PrimaryIconButton>;

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
