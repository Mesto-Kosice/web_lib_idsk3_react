import React, { ReactElement } from 'react';
import { cn } from '@/lib';
import { InPageNavigationLinkProps } from './InPageNavigationLink';

export interface InPageNavigationProps extends React.AllHTMLAttributes<HTMLElement> {
  children?: ReactElement<InPageNavigationLinkProps> | ReactElement<InPageNavigationLinkProps>[];
  title?: string;
}

const InPageNavigation = ({ children, className, title = '', ...props }: InPageNavigationProps) => {
  const inPageNavigationClasses = cn('idsk-in-page-navigation', className);

  return (
    <div className="idsk-in-page-navigation__line">
      <div className={inPageNavigationClasses} {...props}>
        {!!title && <h2 className="idsk-headline-3">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default InPageNavigation;
