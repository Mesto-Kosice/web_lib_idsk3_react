import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { NotificationCard } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/NotificationCard',
  component: NotificationCard
} as Meta<typeof NotificationCard>;

export const Default = {
  args: {
    title: 'Daň z prijmov fyzických a právnických osôb za rok 2021',
    date: new Date().getTime(),
    actions: [
      { label: 'Detail služby', href: '#' },
      { label: 'Podať priznanie', href: '#' }
    ],
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incid ut labore
        et dolore magna aliqua.
      </p>
    ),
    dateFormatString: 'dd.MM.yyyy'
  }
};
