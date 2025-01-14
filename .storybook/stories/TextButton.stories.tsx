import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextButton } from '../../src/components/Atoms';
import '/src/styles/idsk3_theme.css';
import { PlaceholderIcon } from '../../src/svgIcons';
import { CheckCircleIcon, ReportProblemIcon } from '../../src/svgIcons/Actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/TextButton',
  component: TextButton
} as ComponentMeta<typeof TextButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextButton> = (args) => <TextButton {...args} />;

export const TextButtonBasic = Template.bind({});
TextButtonBasic.args = {
  label: 'Text button / Basic',
  onClick: () => console.log('button clicked!')
};

export const TextButtonBasicWithIcon = Template.bind({});
TextButtonBasicWithIcon.args = {
  label: 'Text button / Basic',
  icon: <PlaceholderIcon />,
  onClick: () => console.log('button clicked!')
};

export const TextButtonContrastWithIcon = Template.bind({});
TextButtonContrastWithIcon.args = {
  label: 'Text button / Contrast',
  variant: 'contrast',
  icon: <PlaceholderIcon />,
  onClick: () => console.log('button clicked!')
};

export const TextButtonSuccessWithIcon = Template.bind({});
TextButtonSuccessWithIcon.args = {
  label: 'Text button / Success',
  variant: 'success',
  icon: <CheckCircleIcon />,
  iconPosition: 'right',
  onClick: () => console.log('button clicked!')
};

export const TextButtonWarningWithIcon = Template.bind({});
TextButtonWarningWithIcon.args = {
  label: 'Text button / Warning',
  variant: 'warning',
  icon: <ReportProblemIcon />,
  onClick: () => console.log('button clicked!')
};
