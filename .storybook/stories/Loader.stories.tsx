import { StoryFn, Meta } from '@storybook/react';
import { Loader } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Loader',
  component: Loader
} as Meta<typeof Loader>;

export const LoaderBasic = {};

export const LoaderWithLabel = {
  args: {
    label: 'Please wait ...'
  }
};
