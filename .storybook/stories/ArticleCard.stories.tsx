import React from 'react';
import { Meta } from '@storybook/react';
import { ArticleCard } from '../../src/components/Molecules';
import PlaceholderImg from './images/article-placeholder.jpg';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Molecules/ArticleCard',
  component: ArticleCard
} as Meta<typeof ArticleCard>;

export const Horizontal = {
  args: {
    heading: <a href="/">Nadpis</a>,
    date: new Date().getTime(),
    tags: ['Lorem ipsum', 'ipsum', 'consectetur'],
    featuredImg: <img src={PlaceholderImg} />,
    children:
      'V tejto časti nájdete všetky podtrebné informácie spojené s používaním a vytvorením občianského preukazu s čipom',
    dateFormatString: 'dd. MM. yyyy'
  }
};

export const Vertical = {
  args: {
    heading: <a href="/">Nadpis</a>,
    layout: 'vertical',
    date: new Date().getTime(),
    tags: ['Lorem', 'ipsum', 'consectetur'],
    featuredImg: <img src={PlaceholderImg} />,
    children:
      'V tejto časti nájdete všetky podtrebné informácie spojené s používaním a vytvorením občianského preukazu s čipom'
  }
};

export const WithoutDate = {
  args: {
    heading: <a href="/">Nadpis</a>,
    tags: ['Lorem', 'ipsum', 'consectetur'],
    featuredImg: <img src={PlaceholderImg} />,
    children:
      'V tejto časti nájdete všetky podtrebné informácie spojené s používaním a vytvorením občianského preukazu s čipom'
  }
};

export const WithoutImage = {
  args: {
    heading: <a href="/">Nadpis</a>,
    date: new Date().getTime(),
    tags: ['Lorem', 'ipsum', 'consectetur'],
    children:
      'V tejto časti nájdete všetky podtrebné informácie spojené s používaním a vytvorením občianského preukazu s čipom'
  }
};
