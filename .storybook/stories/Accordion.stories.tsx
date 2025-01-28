import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionListGroup, Input } from '../../src/components';
import { CheckCircleOutlineIcon } from '../../src/svgIcons';
import '../../src/styles/idsk3_theme.css';

const meta = {
  title: 'Atoms/Accordion',
  component: Accordion,
  tags: ['autodocs']
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TemplateGroup = (args) => (
  <AccordionListGroup>
    <Accordion index={1} {...args} />
    <Accordion {...args} />
    <Accordion index={2} {...args} />
  </AccordionListGroup>
);

const TemplateGroupSuccess: StoryFn<typeof Accordion> = (args) => (
  <AccordionListGroup>
    <Accordion index={1} {...args} listItemVariant="success" />
    <Accordion {...args} />
    <Accordion index={2} {...args} listItemVariant="success" />
  </AccordionListGroup>
);

const TemplateGroupOnClick: StoryFn<typeof Accordion> = (args) => (
  <AccordionListGroup>
    <Accordion
      index={1}
      {...args}
      listItemVariant="success"
      listItemIcon={<CheckCircleOutlineIcon />}
    />
    <Accordion {...args} />
    <Accordion index={2} {...args} />
  </AccordionListGroup>
);

const Heading = <h4>Základné údaje</h4>;
const Subtitle = 'V tejto časti môžete meniť svoje základné údaje.';
const Content = (
  <>
    <h4>Filtrovania</h4>
    <Input placeholder="Zadajte meno a priezvisko" label="Meno Priezvisko" />
  </>
);

export const Default = {
  args: {
    heading: Heading,
    subTitle: Subtitle,
    children: Content
  }
};

export const InitiallyOpen = {
  args: {
    heading: Heading,
    subTitle: Subtitle,
    initiallyClosed: false,
    children: Content
  }
};

export const WithoutSubTitle = {
  args: {
    heading: Heading,
    children: Content
  }
};

export const Small = {
  args: {
    heading: Heading,
    subTitle: Subtitle,
    size: 'small',
    children: Content
  }
};

export const SmallWithoutSubTitle = {
  args: {
    heading: Heading,
    size: 'small',
    children: Content
  }
};

export const GrayBackground = {
  args: {
    heading: Heading,
    subTitle: Subtitle,
    initiallyClosed: false,
    bgGray: true,
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    )
  }
};

export const ListGroup = {
  render: TemplateGroup,

  args: {
    heading: Heading,
    subTitle: Subtitle,
    children: Content
  }
};

export const ListGroupSmall = {
  render: TemplateGroup,

  args: {
    heading: Heading,
    subTitle: Subtitle,
    size: 'small',
    children: Content
  }
};

export const ListGroupSuccess = {
  render: TemplateGroupSuccess,

  args: {
    heading: Heading,
    subTitle: Subtitle,
    size: 'small',
    children: Content
  }
};

export const ListGroupOnClick = {
  render: TemplateGroupOnClick,

  args: {
    heading: Heading,
    subTitle: Subtitle,
    listItemButtonProps: {
      onClick: () => {
        console.log('button clicked!');
      }
    },
    size: 'small',
    children: Content
  }
};
