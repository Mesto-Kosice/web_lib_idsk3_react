import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PrimaryButton, Tooltip } from '../../src/components';
import { InfoIcon } from '../../src/svgIcons';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = (args) => (
  <div className="flex justify-center mt-[200px]">
    <Tooltip {...args} />
  </div>
);

export const Default = {
  render: Template,

  args: {
    tooltip:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt adipisci voluptates magni pariatur ad nisi, temporibus nihil. Quisquam, hic? Est harum dignissimos praesentium nemo deleniti nobis magnam, repellendus assumenda?',
    children: <InfoIcon className="w-6 h-6" />
  }
};

export const PositionUp = {
  render: Template,

  args: {
    tooltip:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt adipisci voluptates magni pariatur ad nisi, temporibus nihil. Quisquam, hic? Est harum dignissimos praesentium nemo deleniti nobis magnam, repellendus assumenda?',
    children: <InfoIcon className="w-6 h-6" />,
    positionUp: true
  }
};

export const Instructive = {
  render: Template,

  args: {
    tooltip:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt adipisci voluptates magni pariatur ad nisi, temporibus nihil. Quisquam, hic? Est harum dignissimos praesentium nemo deleniti nobis magnam, repellendus assumenda?',
    children: <InfoIcon className="w-6 h-6" />,
    isInstructive: true
  }
};

export const AlignLeft = {
  render: Template,

  args: {
    tooltip:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt adipisci voluptates magni pariatur ad nisi, temporibus nihil. Quisquam, hic? Est harum dignissimos praesentium nemo deleniti nobis magnam, repellendus assumenda?',
    children: <InfoIcon className="w-6 h-6" />,
    alignLeft: true
  }
};

export const AlignLeftPositionUp = {
  render: Template,

  args: {
    tooltip:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt adipisci voluptates magni pariatur ad nisi, temporibus nihil. Quisquam, hic? Est harum dignissimos praesentium nemo deleniti nobis magnam, repellendus assumenda?',
    children: <InfoIcon className="w-6 h-6" />,
    alignLeft: true,
    positionUp: true
  }
};

export const Short = {
  render: Template,

  args: {
    tooltip: 'Lorem ipsum',
    children: <InfoIcon className="w-6 h-6" />
  }
};

export const CustomChildren = {
  render: Template,

  args: {
    tooltip: 'Lorem ipsum',
    children: <PrimaryButton>Button</PrimaryButton>
  }
};
