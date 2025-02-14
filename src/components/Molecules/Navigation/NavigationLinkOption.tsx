import { cn } from '@/lib';
import React, { HTMLAttributes, ReactElement, ReactNode } from 'react';

export interface NavigationLinkOptionProps {
  label?: ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  linkElement?: ReactElement<HTMLAttributes<HTMLElement>>;
  title?: string;
  selected?: boolean;
}

const NavigationLinkOption = React.forwardRef<HTMLAnchorElement, NavigationLinkOptionProps>(
  ({ label, href, onClick, linkElement, title, selected }, ref) => {
    return (
      <>
        {linkElement ? (
          React.cloneElement(linkElement, {
            className: cn(linkElement.props.className, 'absolute')
          })
        ) : (
          <a
            href={href}
            onClick={onClick}
            ref={ref}
            title={title}
            className={cn({
              'idsk-navigation__link--dropdown-link': selected
            })}
          >
            {label}
          </a>
        )}
      </>
    );
  }
);

NavigationLinkOption.displayName = 'NavigationLinkOption';

export default NavigationLinkOption;
