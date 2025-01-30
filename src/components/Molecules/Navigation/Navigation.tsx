import React, { ReactElement } from 'react';
import { cn } from '@/lib';

import { NavigationLinkProps } from './NavigationLink';

export interface NavigationProps extends React.AllHTMLAttributes<HTMLElement> {
  children?: ReactElement<NavigationLinkProps> | ReactElement<NavigationLinkProps>[];
  fullNav?: boolean;
  label?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  children,
  className,
  fullNav = false,
  label = '',
  ...props
}) => {
  const navigationClasses = cn(
    'idsk-navigation',
    {
      'idsk-navigation--full': fullNav
    },
    className
  );

  return (
    <nav className={navigationClasses} {...props}>
      {!!label && <span className="idsk-navigation__label">{label}</span>}
      {children}
    </nav>
  );
};

export default Navigation;
