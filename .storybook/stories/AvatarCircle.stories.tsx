import React from 'react';
import { Meta } from '@storybook/react';
import { AvatarCircle } from '../../src/components';
import { GroupIcon } from '../../src/svgIcons';
import '../../src/styles/idsk3_theme.css';

export default {
  title: 'Atoms/AvatarCircle',
  component: AvatarCircle
} as Meta<typeof AvatarCircle>;

export const Initials = {
  args: {
    firstName: 'Janko',
    lastName: 'Hraško',
    fullName: 'Ing. Janko Hraško',
    showFullName: true
  }
};

export const DefaultIcon = {
  args: {
    firstName: 'Janko',
    lastName: 'Hraško',
    circleContent: 'icon'
  }
};

export const CustomIcon = {
  args: {
    firstName: 'Janko',
    lastName: 'Hraško',
    circleContent: <GroupIcon />
  }
};

export const Image = {
  args: {
    firstName: 'Janko',
    lastName: 'Hraško',
    circleContent: (
      <img
        src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        alt="Profile picture example"
      />
    )
  }
};

export const WithCaption = {
  args: {
    firstName: 'Janka',
    lastName: 'Hrašková',
    circleContent: (
      <img
        src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        alt="img"
      />
    ),
    caption: 'Fyzická osoba'
  }
};

export const JustName = {
  args: {
    firstName: 'Janka',
    lastName: 'Hrašková',
    circleContent: (
      <img
        src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        alt="img"
      />
    ),
    showName: true
  }
};
