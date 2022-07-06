import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface PublicFooterProps extends React.AllHTMLAttributes<HTMLElement> {
  linksList: ReactNode[];
  bottomSection?: ReactNode;
}

export const PublicFooterSectionHeading = ({
  children,
  className,
  ...props
}: React.AllHTMLAttributes<HTMLParagraphElement>) => (
  <p className={classNames('footer__section-heading', className)} {...props}>
    {children}
  </p>
);

export const PublicFooterSection = ({
  children,
  className,
  ...props
}: React.AllHTMLAttributes<HTMLDivElement>) => (
  <div className={classNames('footer__section', className)} {...props}>
    {children}
  </div>
);

const PublicFooter = ({
  className,
  children,
  linksList = [],
  bottomSection,
  ...props
}: PublicFooterProps) => {
  return (
    <footer className="footer" {...props}>
      <div className="footer__content">
        {children}
        <aside className="footer__aside">
          {!!linksList.length && <div className="footer__links-list">{linksList}</div>}
          {bottomSection}
        </aside>
      </div>
    </footer>
  );
};

export default PublicFooter;
