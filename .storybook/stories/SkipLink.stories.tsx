import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SkipLink } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Molecules/SkipLink',
  component: SkipLink
} as Meta<typeof SkipLink>;

const Template: StoryFn<typeof SkipLink> = (args) => (
  <>
    <p>Pre zobrazenie komponentu stlačte tabulátor</p>
    <SkipLink {...args} />
  </>
);

export const Default = {
  render: Template,

  args: {
    href: '#',
    children: 'Preskočiť na obsah'
  }
};
