import React from 'react';

import { MenuIcon, CloseIcon } from '../../../svgIcons/Navigation';

export interface MenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  opened: boolean;
  toggleOpened: React.MouseEventHandler<HTMLButtonElement> | undefined;
  openedTitle: string;
  closedTitle: string;
}

const MenuButton = ({
  opened,
  toggleOpened,
  closedTitle,
  openedTitle,
  className = '',
  ...props
}: MenuButtonProps) => {
  return (
    <button className={`menu-button ${className}`} onClick={toggleOpened} {...props}>
      <span>{opened ? openedTitle : closedTitle}</span>{' '}
      {opened ? (
        <CloseIcon className="menu-button__icon" />
      ) : (
        <MenuIcon className="menu-button__icon" />
      )}
    </button>
  );
};

export default MenuButton;
