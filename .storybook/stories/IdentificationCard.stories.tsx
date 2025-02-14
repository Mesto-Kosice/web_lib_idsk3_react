import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { IdentificationCard, PrimaryButton, TextButton, AvatarCircle } from '../../src/components';
import { CompareArrowsIcon } from '../../src/svgIcons';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Molecules/IdentificationCard',
  component: IdentificationCard
} as Meta<typeof AvatarCircle>;

export const Default = {
  args: {
    firstName: 'Martin',
    lastName: 'Mucha',
    fullName: 'Ing. Martin Mucha',
    identification: 'RČ 928374/3294',
    children: (
      <>
        <PrimaryButton
          size="large"
          label="Zmeniť zastupovanie"
          className="w-full mb-3"
          icon={<CompareArrowsIcon />}
        />
        <TextButton size="large" variant="warning" label="Odhlásiť sa" className="w-full text-lg" />
      </>
    )
  }
};
