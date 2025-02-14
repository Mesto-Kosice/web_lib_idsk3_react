import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Feedback } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Molecules/Feedback',
  component: Feedback
} as Meta<typeof Feedback>;

const Template: StoryFn<typeof Feedback> = (args) => (
  <Feedback {...args}>Boli tieto informácie pre vás užitočné?</Feedback>
);

export const Default = {
  render: Template,

  args: {
    yesButtonProps: { children: 'Áno' },
    noButtonProps: { children: 'Nie' }
  }
};

export const WithReportButton = {
  render: Template,

  args: {
    yesButtonProps: { children: 'Áno' },
    noButtonProps: { children: 'Nie' },
    reportButtonProps: { children: 'Nahlásiť chybu' }
  }
};
