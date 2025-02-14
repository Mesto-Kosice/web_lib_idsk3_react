import React, { RefObject } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SearchBar } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/SearchBar',
  component: SearchBar
} as Meta<typeof SearchBar>;

export const Default = {
  args: {
    placeholder: 'Placeholder',
    searchbarSize: 'large'
  }
};

export const ButtonLabel = {
  args: {
    placeholder: 'Placeholder',
    buttonLabel: 'Search',
    searchbarSize: 'large'
  }
};

export const Error = {
  args: {
    placeholder: 'Placeholder',
    buttonLabel: 'Search',
    searchbarSize: 'large',
    error: true,
    errorMsg: 'Nesprávny vstup'
  }
};

export const WithSuggestions = {
  args: {
    placeholder: 'Placeholder',
    buttonLabel: 'Search',
    searchbarSize: 'large',
    error: true,
    errorMsg: 'Nesprávny vstup',
    suggestions: ['suggestion 1', 'suggestion 2', 'suggestion 3'],
    suggestionOnClick: (suggestion: string) => {
      console.log(suggestion);
    }
  }
};

const ref: RefObject<HTMLInputElement> = React.createRef();

export const WithCancelButton = {
  args: {
    placeholder: 'Placeholder',
    searchbarSize: 'large',
    showCancelButton: true,
    onCancel: () => {
      console.log('Cancel button clicked');
    },
    ref: ref
  }
};
