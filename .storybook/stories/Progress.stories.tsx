import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Progress } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/Progress',
  component: Progress
} as Meta<typeof Progress>;

export const Default = {
  args: {
    height: '0.5rem',
    percent: '50%'
  }
};
