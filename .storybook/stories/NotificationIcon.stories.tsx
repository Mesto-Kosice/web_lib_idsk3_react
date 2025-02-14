import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { NotificationIcon } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/NotificationIcon',
  component: NotificationIcon
} as Meta<typeof NotificationIcon>;

export const NotAlerted = {
  args: {}
};

export const Alerted = {
  args: {
    alert: true
  }
};
