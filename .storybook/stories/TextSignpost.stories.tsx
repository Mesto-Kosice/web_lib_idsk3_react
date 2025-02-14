import { StoryFn, Meta } from '@storybook/react';
import { TextSignpost } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/TextSignpost',
  component: TextSignpost
} as Meta<typeof TextSignpost>;

export const Default = {
  args: {
    heading: 'Very long title',
    children: 'Všetky informácie o vašom sociálnom poistení na jednom mieste',
    href: '#'
  }
};

export const WithSubtitle = {
  args: {
    heading: 'Very long title',
    subtitle: 'Very long subtitle',
    children: 'Všetky informácie o vašom sociálnom poistení na jednom mieste',
    href: '#'
  }
};
