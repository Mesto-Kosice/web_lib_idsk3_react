import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Signpost, SignpostsGroup } from '../../src/components';
import { ArrowForwardIosIcon, HomeIcon } from '../../src/svgIcons';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Molecules/Signpost',
  component: Signpost
} as Meta<typeof Signpost>;

const TemplateGroup: StoryFn<typeof Signpost> = (args) => (
  <SignpostsGroup>
    <Signpost {...args} />
    <Signpost {...args} />
    <Signpost {...args} />
  </SignpostsGroup>
);

export const Horizontal = {
  args: {
    icon: <HomeIcon />,
    heading: 'Very long title',
    children: 'Všetky informácie o vašom sociálnom poistení na jednom mieste',
    layout: 'horizontal',
    href: '#'
  }
};

export const Vertical = {
  args: {
    icon: <HomeIcon />,
    heading: 'Very long title',
    children: 'Všetky informácie o vašom sociálnom poistení na jednom mieste',
    layout: 'vertical',
    href: '#'
  }
};

export const WithoutIcon = {
  args: {
    heading: 'Very long title',
    children: 'Všetky informácie o vašom sociálnom poistení na jednom mieste',
    layout: 'vertical',
    href: '#',
    target: '_blank'
  }
};

export const WithActionButton = {
  args: {
    icon: <HomeIcon />,
    heading: 'Very long title',
    children:
      'Všetky informácie o vašom sociálnom poistení na jednom mieste. Všetky informácie o vašom sociálnom poistení na jednom mieste.',
    layout: 'horizontal',
    actionButton: { label: 'Action' }
  }
};

export const Group = {
  render: TemplateGroup,

  args: {
    heading: 'Very long title in group',
    arrowIcon: <ArrowForwardIosIcon />,
    layout: 'vertical',
    href: '#'
  }
};

export const GroupWithButtons = {
  render: TemplateGroup,

  args: {
    heading: 'Very long title in group',
    arrowIcon: <ArrowForwardIosIcon />,
    children: 'Všetky informácie o vašom sociálnom poistení na jednom mieste.',
    layout: 'horizontal',
    actionButton: { label: 'Action' }
  }
};
