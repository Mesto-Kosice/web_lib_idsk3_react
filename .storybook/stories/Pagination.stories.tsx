import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Pagination, PaginationDrop } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Pagination',
  component: Pagination
} as Meta<typeof Pagination>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Pagination> = (args) => (
  <>
    <div className="flex justify-between gap-3 flex-wrap">
      <Pagination {...args} />
      <PaginationDrop
        id="pagination-show-count"
        title={15}
        items={[
          { label: '20', key: '20' },
          { label: '15', key: '15' },
          { label: '10', key: '10' },
          { label: '5', key: '5' }
        ]}
        caption="Počet položiek na stránke"
        onClick={() => {}}
      />
    </div>
  </>
);

export const PaginationDefault = {
  render: Template,

  args: {
    siblingsCount: 1,
    pageCount: 15,
    previousAriaLabel: 'Predchádzajúca stránka',
    nextAriaLabel: 'Nasledujúca stránka',
    ariaLabelBuilder: (page) => `Stránka ${page}`
  }
};

export const PaginationLarge = {
  render: Template,

  args: {
    siblingsCount: 3,
    pageCount: 150,
    boundaryPagesCount: 3,
    previousAriaLabel: 'Predchádzajúca stránka',
    nextAriaLabel: 'Nasledujúca stránka',
    ariaLabelBuilder: (page) => `Stránka ${page}`
  }
};

export const PaginationInitialPage = {
  render: Template,

  args: {
    initialPage: 7,
    siblingsCount: 1,
    pageCount: 15,
    previousAriaLabel: 'Predchádzajúca stránka',
    nextAriaLabel: 'Nasledujúca stránka',
    ariaLabelBuilder: (page) => `Stránka ${page}`
  }
};

export const PaginationWithCaption = {
  render: Template,

  args: {
    pageCount: 150,
    caption: 'Zobrazené 1-5 zo 59 výsledkov',
    previousAriaLabel: 'Predchádzajúca stránka',
    nextAriaLabel: 'Nasledujúca stránka',
    ariaLabelBuilder: (page) => `Stránka ${page}`
  }
};
