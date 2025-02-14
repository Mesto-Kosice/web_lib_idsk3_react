import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Logo } from '../../src/components';
import LogoImage from '../../src/svgImages/Logos/LogoImage';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/Logo',
  component: Logo
} as Meta<typeof Logo>;

const Template: StoryFn<typeof Logo> = (args) => (
  <button>
    <Logo {...args} />
  </button>
);

export const Default = {
  render: Template,

  args: {
    image: <LogoImage />,
    title: 'Register rozhodnutí',
    subtitle: 'Ústredný portál verejnej správy'
  }
};

export const OnlyTitle = {
  render: Template,

  args: {
    image: <LogoImage />,
    title: 'Register rozhodnutí'
  }
};

export const OnlyImage = {
  render: Template,

  args: {
    image: <LogoImage />
  }
};

export const ShortTitle = {
  render: Template,

  args: {
    image: <LogoImage />,
    title: 'Ústredný portál verejnej správy',
    shortTitle: 'ÚPVS',
    subtitle: 'Moje Slovensko',
    shortSubtitle: 'Moje Slovensko'
  }
};

export const ShortSubtitle = {
  render: Template,

  args: {
    image: <LogoImage />,
    title: 'Moje Slovensko',
    subtitle: 'Ústredný portál verejnej správy',
    shortSubtitle: 'ÚPVS'
  }
};
