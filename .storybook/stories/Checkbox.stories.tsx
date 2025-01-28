import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Checkbox } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => (
  <div>
    <Checkbox {...args} id="1" />
    <Checkbox {...args} id="2" />
    <Checkbox {...args} id="3" />
    <Checkbox {...args} id="4" />
  </div>
);

export const Default = {
  render: Template,
  args: {}
};

export const Small = {
  render: Template,

  args: {
    inputSize: 'small'
  }
};

export const WithLabel = {
  render: Template,

  args: {
    label: 'Text label'
  }
};

export const WithLongLabel = {
  render: Template,

  args: {
    label:
      'Text label text label text label text label text label text label text label text label text label text label text label text label text label text label text label text label text label text label text label text label text label text label text label text label text label text label text label text label text label'
  }
};

export const Disabled = {
  render: Template,

  args: {
    disabled: true
  }
};

export const DisabledWithLabel = {
  render: Template,

  args: {
    disabled: true,
    label: 'Text label'
  }
};
