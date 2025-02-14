import React from 'react';
import { cn } from '@/lib';

export interface IconLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

const IconLink = React.forwardRef<HTMLAnchorElement, IconLinkProps>(
  ({ children, active, className, href, ...props }, ref) => {
    const linkClasses = cn(
      'idsk-icon-link',
      {
        'idsk-icon-link--active': active
      },
      className
    );
    return (
      <a className={linkClasses} ref={ref} {...props} href={href}>
        {children}
      </a>
    );
  }
);

IconLink.displayName = 'IconLink';

export default IconLink;
