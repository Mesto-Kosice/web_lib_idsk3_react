import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FocusLock, PrimaryButton } from '../../src/components';

export default {
  title: 'Atoms/FocusLock',
  component: FocusLock
} as Meta<typeof FocusLock>;

const Template: StoryFn<typeof FocusLock> = (args) => (
  <div>
    <h3>Focus lock</h3>
    <p className="mb-4 text-neutral-700 idsk-text-body">Navigate using Tab or Shift + Tab</p>
    <PrimaryButton>Unlocked button</PrimaryButton>
    <FocusLock {...args}>
      <div className="p-4 border border-neutral-300 rounded-xl w-fit my-4 flex gap-8">
        <PrimaryButton>Locked button</PrimaryButton>
        <PrimaryButton>Locked button</PrimaryButton>
        <PrimaryButton>Locked button</PrimaryButton>
      </div>
    </FocusLock>
    <PrimaryButton>Unlocked button</PrimaryButton>
  </div>
);

export const Default = {
  render: Template,

  args: {
    isLocked: true
  }
};

export const Unlocked = {
  render: Template,

  args: {
    isLocked: false
  }
};

export const Disabled = {
  render: Template,

  args: {
    disabled: true
  }
};
