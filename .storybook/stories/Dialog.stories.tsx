import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Dialog, PrimaryButton } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Molecules/Dialog',
  component: Dialog
} as Meta<typeof Dialog>;

const Template: StoryFn<typeof Dialog> = (args) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      <PrimaryButton label="Open dialog" onClick={() => setOpened(true)} />
      <Dialog
        {...args}
        opened={opened}
        toggleOpened={() => {
          setOpened(false);
        }}
      ></Dialog>
    </>
  );
};

export const Default = {
  render: Template,

  args: {
    title: 'Title simple',
    primaryButton: <PrimaryButton>Text Button</PrimaryButton>,
    closeButtonAriaLabel: 'Zavrieť'
  }
};

export const WithDescription = {
  render: Template,

  args: {
    title: 'Title simple',
    description: 'Description',
    primaryButton: <PrimaryButton>Text Button</PrimaryButton>,
    closeButtonAriaLabel: 'Zavrieť'
  }
};

export const LongContent = {
  render: Template,

  args: {
    title: 'Title simple',
    primaryButton: <PrimaryButton>Text Button</PrimaryButton>,
    closeButtonAriaLabel: 'Zavrieť',
    children: (
      <div>
        <h3 className="mt-5">Lorem ipsum</h3>
        <p className="idsk-text-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure ab quasi
          perspiciatis consequuntur suscipit illum nulla voluptates assumenda id ipsum quibusdam
          possimus vero! Esse accusamus doloribus omnis quasi rem.
        </p>
        <h3 className="mt-5">Lorem ipsum</h3>
        <p className="idsk-text-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure ab quasi
          perspiciatis consequuntur suscipit illum nulla voluptates assumenda id ipsum quibusdam
          possimus vero! Esse accusamus doloribus omnis quasi rem.
        </p>
        <p className="idsk-text-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure ab quasi
          perspiciatis consequuntur suscipit illum nulla voluptates assumenda id ipsum quibusdam
          possimus vero! Esse accusamus doloribus omnis quasi rem.
        </p>

        <h3 className="mt-5">Lorem ipsum</h3>
        <p className="idsk-text-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure ab quasi
          perspiciatis consequuntur suscipit illum nulla voluptates assumenda id ipsum quibusdam
          possimus vero! Esse accusamus doloribus omnis quasi rem.
        </p>
        <h3 className="mt-5">Lorem ipsum</h3>
        <p className="idsk-text-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure ab quasi
          perspiciatis consequuntur suscipit illum nulla voluptates assumenda id ipsum quibusdam
          possimus vero! Esse accusamus doloribus omnis quasi rem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Commodi, iure ab quasi perspiciatis consequuntur suscipit
          illum nulla voluptates assumenda id ipsum quibusdam possimus vero! Esse accusamus
          doloribus omnis quasi rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Commodi, iure ab quasi perspiciatis consequuntur suscipit illum nulla voluptates assumenda
          id ipsum quibusdam possimus vero! Esse accusamus doloribus omnis quasi rem.
        </p>
      </div>
    )
  }
};

export const SimpleDialog = {
  render: Template,

  args: {
    children: (
      <div className="max-w-xs">
        <h3 className="mt-5">Lorem ipsum</h3>
        <p className="idsk-text-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure ab quasi
          perspiciatis consequuntur suscipit illum nulla voluptates assumenda id ipsum quibusdam
          possimus vero! Esse accusamus doloribus omnis quasi rem.
        </p>
        <PrimaryButton fullWidth={true} className="mt-5">
          Text Button
        </PrimaryButton>
      </div>
    )
  }
};
