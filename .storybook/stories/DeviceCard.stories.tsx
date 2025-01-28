import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { DeviceCard, PrimaryButton } from '../../src/components';
import { PhoneAndroidIcon } from '../../src/svgIcons';
import '../../src/styles/idsk3_theme.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/DeviceCard',
  component: DeviceCard
} as Meta<typeof DeviceCard>;

export const Default = {
  args: {
    icon: <PhoneAndroidIcon />,
    title: 'Martinov iPhone 12',
    button: <PrimaryButton variant="warning">Deaktivovať</PrimaryButton>,
    deviceData: [
      {
        label: 'Device ID:',
        description: '29JE938H0209H002'
      },
      {
        label: 'Typ zariadenia:',
        description: 'Mobile - Apple iPhone 12 pro max'
      },
      {
        label: 'Aktívne od:',
        description: '1.6.2021 / 14:32'
      },
      {
        label: 'Posledná aktivita:',
        description: '9.11.2021 / 07:11'
      }
    ]
  }
};
