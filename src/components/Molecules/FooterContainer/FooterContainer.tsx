import React, { ReactNode } from 'react';
import { cn } from '@/lib';

export interface FooterContainerProps extends React.AllHTMLAttributes<HTMLElement> {
  linksList: ReactNode[];
  bottomSection?: ReactNode;
  logo?: ReactNode;
}

export const FooterContainerSectionHeading: React.FC<
  React.HTMLAttributes<HTMLParagraphElement>
> = ({ children, className, ...props }) => (
  <h2 className={cn('idsk-footer-container__section-heading', className)} {...props}>
    {children}
  </h2>
);

export const FooterContainerSection: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div className={cn('idsk-footer-container__section', className)} {...props}>
    {children}
  </div>
);

const FooterContainer = ({
  className,
  children,
  linksList = [],
  bottomSection,
  logo,
  ...props
}: FooterContainerProps) => {
  return (
    <footer className={cn('idsk-footer-container', className)} {...props}>
      <div className="idsk-footer-container__content">
        {children}
        <aside className="idsk-footer-container__aside">
          {!!linksList.length && (
            <ul className="idsk-footer-container__links-list">
              {linksList.map((link, key) => (
                <li key={key}>{link}</li>
              ))}
            </ul>
          )}
          {bottomSection}
          {!!logo && <div className="idsk-footer-container__logo-wrapper">{logo}</div>}
        </aside>
      </div>
    </footer>
  );
};

export default FooterContainer;
