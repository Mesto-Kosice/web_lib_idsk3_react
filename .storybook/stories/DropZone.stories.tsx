import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { DropZone } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Molecules/DropZone',
  component: DropZone
} as Meta<typeof DropZone>;

export const Default = {
  args: {
    dropzoneTitle: 'Nahraj súbor',
    subtitle: 'Zvoľte súbor a nahrajte ho',
    description: 'alebo preneste zvolenú prílohu sem (max. veľkosť 50MB)',
    buttonText: 'Pridať prílohu',
    filesTitle: 'Nahrané súbory',
    errorMessage: 'Vyskytol sa problém pri nahrávaní',
    percent: '50%',
    maxSize: 50000000,
    progressEmptyColor: '#E0E0E0'
  }
};

export const WithProgressBar = {
  args: {
    dropzoneTitle: 'Nahraj súbor',
    subtitle: 'Zvoľte súbor a nahrajte ho',
    description: 'alebo preneste zvolenú prílohu sem (max. veľkosť 50MB)',
    buttonText: 'Pridať prílohu',
    filesTitle: 'Nahrané súbory',
    errorMessage: 'Vyskytol sa problém pri nahrávaní',
    percent: '50%',
    progress: true,
    maxSize: 50000000,
    progressEmptyColor: '#E0E0E0'
  }
};

export const Inactive = {
  args: {
    dropzoneTitle: 'Nahraj súbor',
    subtitle: 'Zvoľte súbor a nahrajte ho',
    description: 'alebo preneste zvolenú prílohu sem (max. veľkosť 50MB)',
    buttonText: 'Pridať prílohu',
    variant: 'inactive'
  }
};
