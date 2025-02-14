import React, { ReactNode } from 'react';
import { cn } from '@/lib';

export interface TabBarLinkProps {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode;
  selected?: boolean;
}

const TabBarLink = React.forwardRef<HTMLAnchorElement, TabBarLinkProps>(
  ({ href, onClick, children, selected }, ref) => {
    const linkClasses = cn('idsk-tab-bar__link', {
      'idsk-tab-bar__link--clicked': selected
    });
    return (
      <a ref={ref} href={href} onClick={onClick} className={linkClasses}>
        {children}
      </a>
    );
  }
);

TabBarLink.displayName = 'TabBarLink';

export default TabBarLink;
