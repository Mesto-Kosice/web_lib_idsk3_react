import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EventCard from '../components/Molecules/EventCard';
import '/src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/EventCard',
  component: EventCard
} as ComponentMeta<typeof EventCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EventCard> = (args) => <EventCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: '#126DFF',
  title: 'Daň z prijmov fyzických a právnických osôb za rok 2021',
  date: new Date().getTime(),
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incid ut labore et
      dolore magna aliqua.
    </p>
  )
};
