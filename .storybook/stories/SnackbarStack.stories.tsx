import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PrimaryButton, SnackbarStack } from '../../src/components';
import { useState } from '@storybook/addons';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/SnackbarStack',
  component: SnackbarStack
} as Meta<typeof SnackbarStack>;

const Template: StoryFn<typeof SnackbarStack> = (args) => {
  const [snackbars, setSnackbars] = useState<any[]>([]);

  return (
    <>
      <PrimaryButton
        label="Add snackbar to stack"
        onClick={() => {
          setSnackbars((p) => [
            ...p,
            {
              message: `Snackbar in stack id: ${(Math.random() * 10).toFixed(2)}`,
              open: true,
              closeButton: true,
              variant: 'default',
              autoHideDuration: 5000
            }
          ]);
        }}
      />
      <SnackbarStack snackbars={snackbars} setSnackbars={setSnackbars} maxCount={args.maxCount} />
    </>
  );
};

export const Stack = {
  render: Template,

  args: {
    maxCount: 5
  }
};
