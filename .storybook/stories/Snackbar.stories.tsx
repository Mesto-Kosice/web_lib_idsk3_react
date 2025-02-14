import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PrimaryButton, Snackbar } from '../../src/components';
import { useState } from '@storybook/addons';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/Snackbar',
  component: Snackbar
} as Meta<typeof Snackbar>;

const Template: StoryFn<typeof Snackbar> = (args) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAction = () => {
    setOpen(false);
    console.log('Snackbar action called');
  };

  return (
    <>
      <PrimaryButton
        label="Open snackbar"
        onClick={() => {
          setOpen(true);
        }}
      />
      <Snackbar {...args} open={open} onClose={handleClose} onActionCall={handleAction} />
    </>
  );
};

export const Default = {
  render: Template,

  args: {
    message: 'Default single line snackbar',
    autoHideDuration: 6000
  }
};

export const Success = {
  render: Template,

  args: {
    message: 'This action was performed successfully',
    variant: 'success'
  }
};

export const Warning = {
  render: Template,

  args: {
    message: 'Warning! An error has occurred',
    variant: 'warning'
  }
};

export const Info = {
  render: Template,

  args: {
    message: 'This is important information',
    variant: 'info'
  }
};

export const Attention = {
  render: Template,

  args: {
    message: 'This message requires yout attention',
    variant: 'attention'
  }
};

export const WithAction = {
  render: Template,

  args: {
    message: 'Single line snackbar with action',
    action: 'Back',
    closeButton: true
  }
};

export const TwoLine = {
  render: Template,

  args: {
    message: 'Two line snackbar',
    secondLineMessage: 'without action button'
  }
};

export const TwoLineWithAction = {
  render: Template,

  args: {
    message: 'Two line snackbar',
    secondLineMessage: 'with action button',
    action: 'Undo'
  }
};

export const TwoLineWithLongAction = {
  render: Template,

  args: {
    message: 'Two line snackbar with longer',
    secondLineMessage: 'action button',
    action: 'Longer action',
    longAction: true
  }
};
