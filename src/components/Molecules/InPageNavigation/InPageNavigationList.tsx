import React, { ReactElement } from 'react';
import { InPageNavigationLinkProps } from './InPageNavigationLink';
import { cn } from '@/lib';

export interface InPageNavigationListProps extends React.AllHTMLAttributes<HTMLElement> {
  children?: ReactElement<InPageNavigationLinkProps> | ReactElement<InPageNavigationLinkProps>[];
  subtitle?: string;
}

const InPageNavigationList: React.FC<InPageNavigationListProps> = ({
  children,
  className,
  subtitle = '',
  ...props
}) => {
  return (
    <nav className={cn('idsk-in-page-navigation__list', className)} {...props}>
      {!!subtitle && <span className="idsk-in-page-navigation__subtitle">{subtitle}</span>}
      {children}
    </nav>
  );
};

export default InPageNavigationList;
