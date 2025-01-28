import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { CheckCircleIcon, ReportProblemIcon, PlaceholderIcon } from '../../src/svgIcons';
import { SecondaryIconButton } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/SecondaryIconButton',
  component: SecondaryIconButton
} as Meta<typeof SecondaryIconButton>;

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

export const ContrastVariant = {
  args: {
    variant: 'contrast',
    size: 'large',
    icon: <ReportProblemIcon />,
    onClick: () => console.log('button clicked!')
  }
};
