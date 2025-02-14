import { StoryFn, Meta } from '@storybook/react';
import { MenuButton } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/MenuButton',
  component: MenuButton
} as Meta<typeof MenuButton>;

export const Default = {
  args: {
    opened: false,
    toggleOpened: () => {},
    openedTitle: 'Zavrieť',
    closedTitle: 'Menu'
  }
};
