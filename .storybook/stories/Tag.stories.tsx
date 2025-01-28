import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Tag } from '../../src/components';
import { PlaceholderIcon } from '../../src/svgIcons';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/Tag',
  component: Tag
} as Meta<typeof Tag>;

export const Static = {
  args: {
    label: 'Static tag',
    type: 'static'
  }
};

export const Select = {
  args: {
    label: 'Selectable tag',
    type: 'select'
  }
};

export const Action = {
  args: {
    label: 'Action tag',
    type: 'action'
  }
};

export const Filter = {
  args: {
    label: 'Selected tag',
    type: 'filter'
  }
};

export const Custom = {
  args: {
    label: 'Custom colors',
    type: 'static',
    colors: {
      color: '#fc0384',
      background: '#b8a3c9',
      border: '#5328ed'
    }
  }
};

export const Disabled = {
  args: {
    label: 'Disabled',
    disabled: true
  }
};

export const Small = {
  args: {
    label: 'Small tag',
    size: 'small'
  }
};

export const LeftIcon = {
  args: {
    label: 'Text',
    leftIcon: <PlaceholderIcon />
  }
};

export const RightIcon = {
  args: {
    label: 'Text',
    rightIcon: <PlaceholderIcon />
  }
};

export const LeftAndRightIcons = {
  args: {
    label: 'Text',
    leftIcon: <PlaceholderIcon />,
    rightIcon: <PlaceholderIcon />
  }
};

export const BasicVariant = {
  args: {
    label: 'Basic',
    variant: 'basic',
    leftIcon: <PlaceholderIcon />
  }
};

export const WarningVariant = {
  args: {
    label: 'Warning',
    variant: 'warning',
    leftIcon: <PlaceholderIcon />
  }
};

export const SuccessVariant = {
  args: {
    label: 'Success',
    variant: 'success',
    leftIcon: <PlaceholderIcon />
  }
};

export const AttentionVariant = {
  args: {
    label: 'Attention',
    variant: 'attention',
    leftIcon: <PlaceholderIcon />
  }
};
