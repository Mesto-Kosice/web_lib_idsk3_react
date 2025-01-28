import React, { ReactElement } from 'react';
import { cn } from '@/lib';

import { TabBarLinkProps } from './TabBarLink';

export interface TabBarProps extends React.AllHTMLAttributes<HTMLElement> {
  children?: ReactElement<TabBarLinkProps> | ReactElement<TabBarLinkProps>[];
}

const TabBar = ({ children, className, ...props }: TabBarProps) => {
  return (
    <nav className={cn('idsk-tab-bar', className)} {...props}>
      {children}
    </nav>
  );
};

export default TabBar;
