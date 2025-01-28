import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SearchContainer } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Molecules/SearchContainer',
  component: SearchContainer
} as Meta<typeof SearchContainer>;

export const Default = {
  args: {
    title: 'Search',
    placeholder: 'Placeholder',
    searchButton: {
      label: 'Search'
    },
    advancedSearchButton: {
      label: 'Advanced search'
    },
    suggestions: ['suggestion 1', 'suggestion 2', 'suggestion 3'],
    suggestionOnClick: (suggestion: string) => {
      console.log(suggestion);
    }
  }
};

export const ErrorMessage = {
  args: {
    error: true,
    errorMsg: 'This is error message',
    title: 'Search',
    placeholder: 'Placeholder',
    searchButton: {
      label: 'Search'
    },
    advancedSearchButton: {
      label: 'Advanced search'
    }
  }
};

export const WithSuggestions = {};
