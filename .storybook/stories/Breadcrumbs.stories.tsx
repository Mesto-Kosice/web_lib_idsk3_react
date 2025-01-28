import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Breadcrumbs } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/Breadcrumbs',
  component: Breadcrumbs
} as Meta<typeof Breadcrumbs>;

export const Default = {
  args: {
    children: [
      <a href="#" key="1">
        Section 1
      </a>,
      <a href="#" key="2">
        Section 2
      </a>,
      <a href="#" key="3">
        Section 3
      </a>
    ]
  }
};

export const CustomHomeLink = {
  args: {
    homeLink: <button>Home</button>,
    children: [
      <a href="#" key="1">
        Section 1
      </a>,
      <a href="#" key="2">
        Section 2
      </a>,
      <a href="#" key="3">
        Section 3
      </a>
    ]
  }
};
