import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PageLayout } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Core/Typography',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<typeof PageLayout>;

const sampleText = `Dve staršie hneď vedeli, čo si majú vybrať, a kázali si doniesť: tá drahé šaty, tá zlaté
      prstene, ale také, akým by tu doma páru nebolo. Iba najmladšia, vždy tichá a krotká ako
      ovečka, tá aj teraz mlčala.`;

const Headline1Template: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <h1>{sampleText}</h1>
  </PageLayout>
);

export const Headline1 = {
  render: Headline1Template
};

const Headline2Template: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <h2>{sampleText}</h2>
  </PageLayout>
);

export const Headline2 = {
  render: Headline2Template
};

const Headline3Template: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <h3>{sampleText}</h3>
  </PageLayout>
);

export const Headline3 = {
  render: Headline3Template
};

const Headline4Template: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <h4>{sampleText}</h4>
  </PageLayout>
);

export const Headline4 = {
  render: Headline4Template
};

const SubtitleTemplate: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <p className="idsk-subtitle">{sampleText}</p>
  </PageLayout>
);

export const Subtitle = {
  render: SubtitleTemplate
};

const SubtitleBoldTemplate: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <p className="idsk-subtitle font-bold">{sampleText}</p>
  </PageLayout>
);

export const SubtitleBold = {
  render: SubtitleBoldTemplate
};

const BodyTemplate: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <p className="idsk-text-body">{sampleText}</p>
  </PageLayout>
);

export const Body = {
  render: BodyTemplate
};

const BodyBoldTemplate: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <p className="idsk-text-body font-bold">{sampleText}</p>
  </PageLayout>
);

export const BodyBold = {
  render: BodyBoldTemplate
};

const Body1Template: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <p className="idsk-text-body-1">{sampleText}</p>
  </PageLayout>
);

export const Body1 = {
  render: Body1Template
};

const Body1BoldTemplate: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <p className="idsk-text-body-1 font-bold">{sampleText}</p>
  </PageLayout>
);

export const Body1Bold = {
  render: Body1BoldTemplate
};

const CaptionTemplate: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <span className="idsk-caption">{sampleText}</span>
  </PageLayout>
);

export const Caption = {
  render: CaptionTemplate
};

const CaptionBoldTemplate: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <span className="idsk-caption font-bold">{sampleText}</span>
  </PageLayout>
);

export const CaptionBold = {
  render: CaptionBoldTemplate
};

const ButtonTemplate: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <button className="idsk-text-button">{sampleText}</button>
  </PageLayout>
);

export const Button = {
  render: ButtonTemplate
};

const LinkLTemplate: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <a className="idsk-link-l">{sampleText}</a>
  </PageLayout>
);

export const LinkL = {
  render: LinkLTemplate
};

const LinkLBoldTemplate: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <a className="idsk-link-l font-bold">{sampleText}</a>
  </PageLayout>
);

export const LinkLBold = {
  render: LinkLBoldTemplate
};

const LinkMTemplate: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <a className="idsk-link-m">{sampleText}</a>
  </PageLayout>
);

export const LinkM = {
  render: LinkMTemplate
};

const LinkMBoldTemplate: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <a className="idsk-link-m font-bold">{sampleText}</a>
  </PageLayout>
);

export const LinkMBold = {
  render: LinkMBoldTemplate
};

const LinkSTemplate: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <a className="idsk-link-s">{sampleText}</a>
  </PageLayout>
);

export const LinkS = {
  render: LinkSTemplate
};

const LinkSBoldTemplate: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <a className="idsk-link-s font-bold">{sampleText}</a>
  </PageLayout>
);

export const LinkSBold = {
  render: LinkSBoldTemplate
};

const LinkCaptionTemplate: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <a className="idsk-link-caption">{sampleText}</a>
  </PageLayout>
);

export const LinkCaption = {
  render: LinkCaptionTemplate
};
