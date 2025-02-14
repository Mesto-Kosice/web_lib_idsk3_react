import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SecondaryButton } from '../../src/components';
import { CheckCircleIcon, ReportProblemIcon, PlaceholderIcon } from '../../src/svgIcons';
import '../../src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/SecondaryButton',
  component: SecondaryButton
} as Meta<typeof SecondaryButton>;

export const SecondaryBasic = {
  args: {
    label: 'Secondary / Basic',
    onClick: () => console.log('button clicked!')
  }
};

export const SecondaryBasicWithIcon = {
  args: {
    label: 'Secondary / Basic',
    icon: <PlaceholderIcon />,
    onClick: () => console.log('button clicked!')
  }
};

export const SecondaryContrastWithIcon = {
  args: {
    label: 'Secondary / Contrast',
    variant: 'contrast',
    icon: <PlaceholderIcon />,
    onClick: () => console.log('button clicked!')
  }
};

export const SecondarySuccessWithIcon = {
  args: {
    label: 'Secondary / Success',
    variant: 'success',
    icon: <CheckCircleIcon />,
    iconPosition: 'right',
    onClick: () => console.log('button clicked!')
  }
};

export const SecondaryWarningWithIcon = {
  args: {
    label: 'Secondary / Warning',
    variant: 'warning',
    icon: <ReportProblemIcon />,
    onClick: () => console.log('button clicked!')
  }
};
