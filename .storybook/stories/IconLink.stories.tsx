import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { IconLink } from '../../src/components';
import { InfoIcon } from '../../src/svgIcons';
import '../../src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/IconLink',
  component: IconLink
} as Meta<typeof IconLink>;

export const Default = {
  args: { children: <InfoIcon />, href: '#' }
};
