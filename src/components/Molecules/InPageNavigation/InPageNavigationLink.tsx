import React, { ReactElement, ReactNode } from 'react';
import { PlayArrowIcon } from '@/svgIcons';

export interface InPageNavigationLinkProps {
  label?: ReactNode;
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  linkElement?: ReactElement;
}

const InPageNavigationLink = React.forwardRef<HTMLAnchorElement, InPageNavigationLinkProps>(
  ({ label, className, href, onClick, linkElement }, ref) => {
    return (
      <>
        {linkElement ? (
          linkElement
        ) : (
          <a href={href} onClick={onClick} ref={ref} className={className}>
            <PlayArrowIcon /> {label}
          </a>
        )}
      </>
    );
  }
);

InPageNavigationLink.displayName = 'InPageNavigationLink';

export default InPageNavigationLink;
