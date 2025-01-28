import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { RadioButton } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton
} as Meta<typeof RadioButton>;

export const Default = {
  args: { label: 'Text label' }
};

export const Small = {
  args: {
    inputSize: 'small',
    label: 'Text label'
  }
};

export const Disabled = {
  args: {
    disabled: true,
    label: 'Text label'
  }
};

export const WithError = {
  args: {
    error: true,
    label: 'Text label'
  }
};
