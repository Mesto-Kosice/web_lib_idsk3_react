import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import '../../src/styles/idsk3_theme.css';
import {
  DropDown,
  HorizontalNavigation,
  HorizontalNavigationGroup,
  HorizontalNavigationItem
} from '../../src/components';
import {
  ExpandMoreIcon,
  DeleteOutlineIcon,
  MarkEmailReadIcon,
  FilterListIcon,
  OutlinedFlagIcon,
  FolderOpenIcon
} from '../../src/svgIcons';

export default {
  title: 'Molecules/HorizontalNavigation',
  component: HorizontalNavigation
} as Meta<typeof HorizontalNavigation>;

export const Default = {
  args: {
    mobileView: 'grid',
    children: (
      <>
        <HorizontalNavigationItem icon={<FolderOpenIcon />} label="Priečinky" />
        <HorizontalNavigationItem icon={<OutlinedFlagIcon />} label="Štítky" />
        <HorizontalNavigationItem icon={<FilterListIcon />} label="Filtrovanie" />
      </>
    )
  }
};

export const Group = {
  args: {
    mobileView: 'grid',
    children: (
      <>
        <HorizontalNavigationGroup dropdownOnMobile={false} hideLabelOnMobile={true}>
          <HorizontalNavigationItem
            icon={<DeleteOutlineIcon />}
            label="Odstrániť"
            className="text-alert-warning"
          />
          <HorizontalNavigationItem icon={<FolderOpenIcon />} label="Presunúť" />
          <HorizontalNavigationItem icon={<MarkEmailReadIcon />} label="Označiť ako prečítané" />
        </HorizontalNavigationGroup>

        <HorizontalNavigationItem icon={<FilterListIcon />} label="Filtrovanie" />

        <DropDown
          dropDownTitle="Viac"
          arrowIcon={<ExpandMoreIcon width="1.5rem" height="1.5rem" />}
          className="tb2:ml-auto"
          optionsSide="left"
        >
          <button>Ďalšia položka</button>
          <button>A ešte jedna</button>
        </DropDown>
      </>
    )
  }
};

export const Tabs = {
  args: {
    children: (
      <>
        <HorizontalNavigationGroup dropdownOnMobile={true} dropdownLabel={'Prijaté'}>
          <HorizontalNavigationItem label="Prijaté" active={true} />
          <HorizontalNavigationItem label="Odoslané" />
          <HorizontalNavigationItem label="Rozpracované" />
          <HorizontalNavigationItem label="Kôš" />
        </HorizontalNavigationGroup>

        <HorizontalNavigationItem icon={<FolderOpenIcon />} label="Priečinky" />
        <HorizontalNavigationItem icon={<OutlinedFlagIcon />} label="Štítky" />
        <HorizontalNavigationItem icon={<FilterListIcon />} label="Filtrovanie" />

        <DropDown
          dropDownTitle="Viac"
          arrowIcon={<ExpandMoreIcon width="1.5rem" height="1.5rem" />}
          className="tb2:ml-auto"
          optionsSide="left"
        >
          <button>Ďalšia položka</button>
          <button>A ešte jedna</button>
        </DropDown>
      </>
    )
  }
};
