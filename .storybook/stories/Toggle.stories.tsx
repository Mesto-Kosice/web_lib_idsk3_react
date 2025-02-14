import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Toggle } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/Toggle',
  component: Toggle
} as Meta<typeof Toggle>;

const Template: StoryFn<typeof Toggle> = (args) => {
  const [enabled, setEnabled] = useState(args.checked);
  return (
    <>
      <Toggle
        {...args}
        checked={enabled}
        onChange={(checked) => {
          setEnabled(checked);
        }}
      />
    </>
  );
};

export const Large = {
  render: Template,
  args: {}
};

export const LargeWithLabel = {
  render: Template,

  args: {
    label: 'Text label'
  }
};

export const SmallWithLabel = {
  render: Template,

  args: {
    inputSize: 'small',
    label: 'Text label'
  }
};

export const Small = {
  render: Template,

  args: {
    inputSize: 'small'
  }
};

export const Disabled = {
  render: Template,

  args: {
    disabled: true,
    label: 'Text label'
  }
};

export const DisabledAndChecked = {
  render: Template,

  args: {
    disabled: true,
    checked: true
  }
};
