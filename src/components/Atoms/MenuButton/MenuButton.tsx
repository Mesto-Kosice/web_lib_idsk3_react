import React from 'react';
import { MenuIcon, CloseIcon } from '@/svgIcons';

export interface MenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  opened: boolean;
  toggleOpened: React.MouseEventHandler<HTMLButtonElement> | undefined;
  openedTitle: string;
  closedTitle: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  opened,
  toggleOpened,
  closedTitle,
  openedTitle,
  className = '',
  ...props
}) => {
  return (
    <button className={`idsk-menu-button ${className}`} onClick={toggleOpened} {...props}>
      <span>{opened ? openedTitle : closedTitle}</span>{' '}
      {opened ? (
        <CloseIcon className="idsk-menu-button__icon" />
      ) : (
        <MenuIcon className="idsk-menu-button__icon" />
      )}
    </button>
  );
};

export default MenuButton;
