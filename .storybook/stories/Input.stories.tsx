import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Input } from '../../src/components';
import { PlaceholderIcon } from '../../src/svgIcons';
import '../../src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Input',
  component: Input
} as Meta<typeof Input>;

export const Default = {
  args: {
    placeholder: 'Placeholder'
  }
};

export const WithIcon = {
  args: {
    placeholder: 'Placeholder',
    icon: <PlaceholderIcon />
  }
};

export const WithIconAndAction = {
  args: {
    placeholder: 'Placeholder',
    icon: <PlaceholderIcon />,
    actionButton: {
      label: 'Action',
      onClick: () => {
        console.log('Action button clicked!');
      }
    }
  }
};

export const WithLabel = {
  args: {
    label: 'This is label',
    placeholder: 'Placeholder'
  }
};

export const WithCaption = {
  args: {
    label: 'This is label',
    caption: 'This is caption',
    placeholder: 'Placeholder',
    errorMsg: 'This is error message'
  }
};

export const WithSubtitle = {
  args: {
    label: 'This is label',
    caption: 'This is caption',
    subtitle: 'This is very long subtitle',
    placeholder: 'Placeholder',
    errorMsg: 'This is error message'
  }
};

export const Optional = {
  args: {
    label: 'This is label',
    caption: 'This is caption',
    subtitle: 'This is very long subtitle',
    placeholder: 'Placeholder',
    errorMsg: 'This is error message',
    optionalText: '(nepovinné)'
  }
};

export const Mandatory = {
  args: {
    label: 'This is label',
    caption: 'This is caption',
    subtitle: 'This is very long subtitle',
    placeholder: 'Placeholder',
    errorMsg: 'This is error message',
    mandatory: true
  }
};

export const ErrorMessage = {
  args: {
    label: 'This is label',
    placeholder: 'Placeholder',
    error: true,
    errorMsg: 'This is error message'
  }
};

export const DisabledErrorIcon = {
  args: {
    actionButton: {
      label: <PlaceholderIcon width={'20px'} height={'20px'} />,
      onClick: () => {
        console.log('Action button clicked!');
      }
    },
    label: 'This is label',
    placeholder: 'Placeholder',
    error: true,
    errorMsg: 'This is error message',
    disabledErrorIcon: true
  }
};
