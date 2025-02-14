import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PrimaryButton, SecondaryButton, ErrorDialog } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Molecules/ErrorDialog',
  component: ErrorDialog
} as Meta<typeof ErrorDialog>;

const Template: StoryFn<typeof ErrorDialog> = (args) => {
  const [opened, setOpened] = React.useState(true);
  return (
    <ErrorDialog {...args} opened={opened}>
      {args.children}
      <SecondaryButton fullWidth size="large" type="button" onClick={() => setOpened(false)}>
        Close
      </SecondaryButton>
    </ErrorDialog>
  );
};

export const Default = {
  render: Template,

  args: {
    title: 'Naozaj si želáte deaktivovať zariadenie "Martinov iPhone 12"?',
    subtitle: 'Po potvrdení bude vybrané zariadenie nenávratne vymazané.',
    children: (
      <PrimaryButton fullWidth size="large" type="button" variant="warning" onClick={() => {}}>
        Deaktivovať
      </PrimaryButton>
    )
  }
};

export const WithoutButton = {
  render: Template,

  args: {
    title: 'This is the title',
    subtitle: 'Subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta atque.'
  }
};

export const WithoutTitle = {
  render: Template,

  args: {
    subtitle:
      'Subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta atque.',
    children: (
      <PrimaryButton fullWidth size="large" type="button" variant="warning" onClick={() => {}}>
        Action
      </PrimaryButton>
    )
  }
};

export const WithoutSubtitle = {
  render: Template,

  args: {
    title: 'Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta atque',
    children: (
      <PrimaryButton fullWidth size="large" type="button" variant="warning" onClick={() => {}}>
        Action
      </PrimaryButton>
    )
  }
};
