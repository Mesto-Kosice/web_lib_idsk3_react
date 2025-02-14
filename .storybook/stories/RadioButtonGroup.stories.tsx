import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { RadioButtonGroup, RadioButton } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/RadioButtonGroup',
  component: RadioButtonGroup
} as Meta<typeof RadioButtonGroup>;
const Template: StoryFn<typeof RadioButtonGroup> = (args) => (
  <RadioButtonGroup {...args}>
    <RadioButton label="Text label 1" />
    <RadioButton label="Text label 2" />
    <RadioButton label="Text label 3" />
    <RadioButton label="Text label 4" />
  </RadioButtonGroup>
);

export const Default = {
  render: Template,
  args: {}
};

export const WithLabel = {
  render: Template,

  args: {
    label: 'Text label'
  }
};

export const Disabled = {
  render: Template,

  args: {
    disabled: true
  }
};

export const Mandatory = {
  render: Template,

  args: {
    label: 'Text label',
    mandatory: true
  }
};

export const WithError = {
  render: Template,

  args: {
    label: 'Text label',
    mandatory: true,
    error: true,
    errorMsg: 'Toto pole je povinné'
  }
};
