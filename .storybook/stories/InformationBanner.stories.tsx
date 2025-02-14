import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InformationBanner, TextButton } from '../../src/components';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Molecules/InformationBanner',
  component: InformationBanner
} as Meta<typeof InformationBanner>;

export const Information = {
  args: {
    closeButtonLabel: 'Zatvoriť',
    ariaLabel: 'Oznam',
    title: 'Oznam',
    variant: 'information',
    children: (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
        <a href="#" className="idsk-link-s">
          Viac informácií
        </a>
      </p>
    )
  }
};

export const Warning = {
  args: {
    title: 'Oznam',
    variant: 'warning',
    children: (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
        <a href="#" className="idsk-link-s">
          Viac informácií
        </a>
      </p>
    )
  }
};

export const Alert = {
  args: {
    title: 'Oznam',
    variant: 'alert',
    children: (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
        <a href="#" className="idsk-link-s">
          Viac informácií
        </a>
      </p>
    )
  }
};

export const Success = {
  args: {
    title: 'Oznam',
    variant: 'success',
    children: (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
        <a href="#" className="idsk-link-s">
          Viac informácií
        </a>
      </p>
    )
  }
};

export const InformationActionButton = {
  args: {
    title: 'Oznam',
    variant: 'information',
    children: (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
        <a href="#" className="idsk-link-s">
          Viac informácií
        </a>
      </p>
    ),
    actionButton: <TextButton label="Action" />
  }
};

export const WarningActionButton = {
  args: {
    title: 'Oznam',
    variant: 'warning',
    children: (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
        <a href="#" className="idsk-link-s">
          Viac informácií
        </a>
      </p>
    ),
    actionButton: <TextButton label="Action" />
  }
};

export const AlertActionButton = {
  args: {
    title: 'Oznam',
    variant: 'alert',
    children: (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
        <a href="#" className="idsk-link-s">
          Viac informácií
        </a>
      </p>
    ),
    actionButton: <TextButton label="Action" />
  }
};

export const SuccessActionButton = {
  args: {
    title: 'Oznam',
    variant: 'success',
    children: (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
        <a href="#" className="idsk-link-s">
          Viac informácií
        </a>
      </p>
    ),
    actionButton: <TextButton label="Action" variant="success" />
  }
};

export const Short = {
  args: {
    title: 'Oznam',
    variant: 'success',
    children: (
      <p>
        Krátky oznam <br />
      </p>
    ),
    actionButton: <TextButton label="Action" variant="success" />
  }
};

export const WithoutTitle = {
  args: {
    variant: 'alert',
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  }
};

export const WithoutCloseButton = {
  args: {
    title: 'Oznam',
    children: (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
        <a href="#" className="idsk-link-s">
          Viac informácií
        </a>
      </p>
    ),
    hideCloseButton: true
  }
};

export const WithoutIcon = {
  args: {
    useDefaultIcon: false,
    title: 'Oznam',
    children: (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
        <a href="#" className="idsk-link-s">
          Viac informácií
        </a>
      </p>
    ),
    hideCloseButton: true
  }
};

export const InformationAnnouncementInformation = {
  args: {
    title: 'Oznam',
    variant: 'information',
    type: 'announcement',
    children: (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
        <a href="#" className="idsk-link-s">
          Viac informácií
        </a>
      </p>
    )
  }
};

export const WarningInformationAnnouncement = {
  args: {
    title: 'Oznam',
    variant: 'warning',
    type: 'announcement',
    children: (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
        <a href="#" className="idsk-link-s">
          Viac informácií
        </a>
      </p>
    )
  }
};

export const AlertInformationAnnouncement = {
  args: {
    title: 'Oznam',
    variant: 'alert',
    type: 'announcement',
    children: (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
        <a href="#" className="idsk-link-s">
          Viac informácií
        </a>
      </p>
    )
  }
};

export const InformationAnnouncementWithoutTitle = {
  args: {
    variant: 'information',
    type: 'announcement',
    children: (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
        <a href="#" className="idsk-link-s">
          Viac informácií
        </a>
      </p>
    )
  }
};
