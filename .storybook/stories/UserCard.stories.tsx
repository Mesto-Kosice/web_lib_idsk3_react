import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { UserCard, TextButton } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/UserCard',
  component: UserCard
} as Meta<typeof UserCard>;

export const Default = {
  args: {
    title: 'Používateľ:',
    name: 'Martin Mucha',
    button: <TextButton>Zmeniť používateľa</TextButton>,
    children: (
      <span>
        Číslo OP: <strong>FE882K</strong>
      </span>
    )
  }
};
