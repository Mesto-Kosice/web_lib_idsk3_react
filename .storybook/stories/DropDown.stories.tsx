import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { DropDown, BaseButton } from '../../src/components';
import { ExpandMoreIcon } from '../../src/svgIcons';
import '../../src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/DropDown',
  component: DropDown
} as Meta<typeof DropDown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof DropDown> = (args) => (
  <div className="ml-8">
    <DropDown {...args} />
  </div>
);

export const Default = {
  render: Template,

  args: {
    dropDownTitle: 'slovenčina',
    children: [<a href="/">english</a>, <a href="/">український</a>]
  }
};

export const CustomArrowIcon = {
  render: Template,

  args: {
    dropDownTitle: 'slovenčina',
    children: [<a href="/">english</a>, <a href="/">український</a>],
    arrowIcon: <ExpandMoreIcon width="1.5rem" height="1.5rem" />
  }
};

export const LeftSideOptions = {
  render: Template,

  args: {
    dropDownTitle: 'slovenčina',
    optionsSide: 'left',
    children: [<a href="/">english</a>, <a href="/">український</a>]
  }
};

export const WithDivider = {
  render: Template,

  args: {
    dropDownTitle: 'Menu',
    children: [
      <a href="/">Exportovať</a>,
      <a href="/">Archivovať</a>,
      <BaseButton className="text-left">Stiahnuť</BaseButton>,
      <hr />,
      <a href="/">Sprievodca schránkou</a>,
      <a href="/">Zobraziť detail</a>,
      <hr />,
      <a href="/">Pomoc</a>
    ]
  }
};
