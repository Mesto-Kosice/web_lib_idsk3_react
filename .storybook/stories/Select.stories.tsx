import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PlaceholderIcon } from '../../src/svgIcons';
import { Select } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Select',
  component: Select
} as Meta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Select> = (args) => (
  <Select {...args}>
    <option value="1">Some really random option</option>
    <option value="2">Some another option</option>
    <option value="3">This is nice option</option>
  </Select>
);

export const Default = {
  render: Template,
  args: {}
};

export const Placeholder = {
  render: Template,

  args: {
    placeholder: 'Select some option'
  }
};

export const Disabled = {
  render: Template,

  args: {
    disabled: true
  }
};

export const WithIcon = {
  render: Template,

  args: {
    icon: <PlaceholderIcon />
  }
};

export const WithLabel = {
  render: Template,

  args: {
    label: 'This is label'
  }
};

export const WithCaption = {
  render: Template,

  args: {
    label: 'This is label',
    caption: 'This is caption',
    errorMsg: 'This is error message'
  }
};

export const WithSubtitle = {
  render: Template,

  args: {
    label: 'This is label',
    caption: 'This is caption',
    subtitle: 'This is very long subtitle',
    errorMsg: 'This is error message'
  }
};

export const ErrorMessage = {
  render: Template,

  args: {
    label: 'This is label',
    error: true,
    errorMsg: 'This is error message'
  }
};
