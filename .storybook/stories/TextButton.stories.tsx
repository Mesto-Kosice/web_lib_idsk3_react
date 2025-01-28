import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TextButton } from '../../src/components';
import { CheckCircleIcon, ReportProblemIcon, PlaceholderIcon } from '../../src/svgIcons';
import '../../src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/TextButton',
  component: TextButton
} as Meta<typeof TextButton>;

export const TextButtonBasic = {
  args: {
    label: 'Text button / Basic',
    onClick: () => console.log('button clicked!')
  }
};

export const TextButtonBasicWithIcon = {
  args: {
    label: 'Text button / Basic',
    icon: <PlaceholderIcon />,
    onClick: () => console.log('button clicked!')
  }
};

export const TextButtonContrastWithIcon = {
  args: {
    label: 'Text button / Contrast',
    variant: 'contrast',
    icon: <PlaceholderIcon />,
    onClick: () => console.log('button clicked!')
  }
};

export const TextButtonSuccessWithIcon = {
  args: {
    label: 'Text button / Success',
    variant: 'success',
    icon: <CheckCircleIcon />,
    iconPosition: 'right',
    onClick: () => console.log('button clicked!')
  }
};

export const TextButtonWarningWithIcon = {
  args: {
    label: 'Text button / Warning',
    variant: 'warning',
    icon: <ReportProblemIcon />,
    onClick: () => console.log('button clicked!')
  }
};
