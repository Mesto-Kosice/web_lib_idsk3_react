import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { EventCard } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/EventCard',
  component: EventCard
} as Meta<typeof EventCard>;

export const Default = {
  args: {
    color: '#126DFF',
    title: 'Daň z prijmov fyzických a právnických osôb za rok 2021',
    date: new Date().getTime(),
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incid ut labore
        et dolore magna aliqua.
      </p>
    )
  }
};

export const Completed = {
  args: {
    color: '#126DFF',
    title: 'Daň z prijmov fyzických a právnických osôb za rok 2021',
    date: new Date().getTime(),
    isComplete: true,
    completeLabel: 'Vyriešené',
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incid ut labore
        et dolore magna aliqua.
      </p>
    )
  }
};
