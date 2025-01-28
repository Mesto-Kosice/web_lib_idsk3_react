import { StoryFn, Meta } from '@storybook/react';
import { TextField } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/TextField',
  component: TextField
} as Meta<typeof TextField>;

export const Default = {
  args: {
    placeholder: 'Placeholder'
  }
};

export const WithLabel = {
  args: {
    label: 'This is label',
    placeholder: 'Placeholder'
  }
};

export const Optional = {
  args: {
    label: 'This is label',
    placeholder: 'Placeholder',
    optionalText: '(nepovinné)'
  }
};

export const Mandatory = {
  args: {
    label: 'This is label',
    placeholder: 'Placeholder',
    mandatory: true
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

export const ErrorMessage = {
  args: {
    label: 'This is label',
    placeholder: 'Placeholder',
    error: true,
    errorMsg: 'This is error message'
  }
};
