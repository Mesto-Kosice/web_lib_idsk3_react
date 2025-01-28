import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ModalSideBar, PrimaryButton, SecondaryButton } from '../../src/components';
import { PlaceholderIcon } from '../../src/svgIcons';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/ModalSideBar',
  component: ModalSideBar
} as Meta<typeof ModalSideBar>;

const Template: StoryFn<typeof ModalSideBar> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PrimaryButton label="Open sidebar" onClick={() => setOpen(true)} />
      <ModalSideBar {...args} opened={open} toggleOpened={setOpen} />
    </>
  );
};

export const Default = {
  render: Template,

  args: {
    heading: 'Profil',
    closeButtonAriaLabel: 'Zavrieť'
  }
};

export const WithFooterButtons = {
  render: Template,

  args: {
    heading: 'Profil',
    closeButtonAriaLabel: 'Zavrieť',
    footer: (
      <>
        <PrimaryButton size="large" icon={<PlaceholderIcon />}>
          Action
        </PrimaryButton>
        <SecondaryButton size="large">Subaction</SecondaryButton>
      </>
    )
  }
};

export const LongContent = {
  render: Template,

  args: {
    heading: 'Profil',
    closeButtonAriaLabel: 'Zavrieť',
    footer: (
      <>
        <PrimaryButton size="large" icon={<PlaceholderIcon />}>
          Action
        </PrimaryButton>
        <SecondaryButton size="large">Subaction</SecondaryButton>
      </>
    ),
    children: (
      <>
        <div className="bg-neutral-90 h-20" />
        <div className="bg-neutral-100 h-20" />
        <div className="bg-neutral-90 h-20" />
        <div className="bg-neutral-100 h-20" />
        <div className="bg-neutral-90 h-20" />
        <div className="bg-neutral-100 h-20" />
        <div className="bg-neutral-90 h-20" />
        <div className="bg-neutral-100 h-20" />
        <div className="bg-neutral-90 h-20" />
        <div className="bg-neutral-100 h-20" />
        <div className="bg-neutral-90 h-20" />
        <div className="bg-neutral-100 h-20" />
        <div className="bg-neutral-90 h-20" />
        <div className="bg-neutral-100 h-20" />
      </>
    )
  }
};
