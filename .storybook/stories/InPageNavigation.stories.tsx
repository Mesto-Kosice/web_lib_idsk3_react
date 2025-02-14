import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InPageNavigation, InPageNavigationList, InPageNavigationLink } from '../../src/components';
import { PlayArrowIcon } from '../../src/svgIcons';
import { cn } from '@/lib';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Molecules/InPageNavigation',
  component: InPageNavigation
} as Meta<typeof InPageNavigation>;

const Template: StoryFn<typeof InPageNavigation> = (args) => {
  const [selectedLink, setSelectedLink] = useState<string | null>('subsection1');

  const handleClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    setSelectedLink(link);
  };

  return (
    <InPageNavigation {...args}>
      <InPageNavigationList>
        <InPageNavigationLink
          linkElement={
            <a
              href="#"
              className={cn({ 'idsk-active': selectedLink === 'subsection1' })}
              onClick={(e) => handleClick(e, 'subsection1')}
            >
              <PlayArrowIcon />
              Subsection text
            </a>
          }
        />
        <InPageNavigationLink
          className={cn({ 'idsk-active': selectedLink === 'subsection2' })}
          label="Subsection text"
          href="#"
          onClick={(e) => handleClick(e, 'subsection2')}
        />
        <InPageNavigationLink
          className={cn({ 'idsk-active': selectedLink === 'subsection3' })}
          label="Subsection text"
          href="#"
          onClick={(e) => handleClick(e, 'subsection3')}
        />
      </InPageNavigationList>
    </InPageNavigation>
  );
};

const TemplateWithSubtitle: StoryFn<typeof InPageNavigation> = (args) => {
  const [selectedLink, setSelectedLink] = useState<string | null>('subsection1');

  const handleClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    setSelectedLink(link);
  };

  return (
    <InPageNavigation {...args}>
      <InPageNavigationList>
        <InPageNavigationLink
          linkElement={
            <a
              href="#"
              className={cn({ 'idsk-active': selectedLink === 'subsection1' })}
              onClick={(e) => handleClick(e, 'subsection1')}
            >
              <PlayArrowIcon />
              Subsection text
            </a>
          }
        />
        <InPageNavigationLink
          className={cn({ 'idsk-active': selectedLink === 'subsection2' })}
          label="Subsection text"
          href="#"
          onClick={(e) => handleClick(e, 'subsection2')}
        />
        <InPageNavigationLink
          className={cn({ 'idsk-active': selectedLink === 'subsection3' })}
          label="Subsection text"
          href="#"
          onClick={(e) => handleClick(e, 'subsection3')}
        />
      </InPageNavigationList>
      <InPageNavigationList subtitle="Subtitle">
        <InPageNavigationLink
          linkElement={
            <a
              href="#"
              className={cn({ 'idsk-active': selectedLink === 'subsection4' })}
              onClick={(e) => handleClick(e, 'subsection4')}
            >
              <PlayArrowIcon />
              Subsection text
            </a>
          }
        />
        <InPageNavigationLink
          className={cn({ 'idsk-active': selectedLink === 'subsection5' })}
          label="Subsection text"
          href="#"
          onClick={(e) => handleClick(e, 'subsection5')}
        />
        <InPageNavigationLink
          className={cn({ 'idsk-active': selectedLink === 'subsection6' })}
          label="Subsection text"
          href="#"
          onClick={(e) => handleClick(e, 'subsection6')}
        />
      </InPageNavigationList>
    </InPageNavigation>
  );
};

export const Default = {
  render: Template,

  args: {
    title: 'Title'
  }
};

export const WithSubtitle = {
  render: TemplateWithSubtitle,

  args: {
    title: 'Title'
  }
};
