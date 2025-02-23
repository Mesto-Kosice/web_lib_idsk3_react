import React, { ReactElement } from 'react';
import { cn } from '@/lib';

import { DropDown } from '@/components';
import { ExpandMoreIcon } from '@/svgIcons';
import { NavigationLinkOptionProps } from './NavigationLinkOption';

export interface NavigationLinkProps extends NavigationLinkOptionProps {
  id?: string;
  alert?: number;
  selected?: boolean;
  children?: ReactElement<NavigationLinkOptionProps> | ReactElement<NavigationLinkOptionProps>[];
}

const NavigationLink = React.forwardRef<HTMLAnchorElement, NavigationLinkProps>(
  ({ id, label, href, onClick, alert, selected, linkElement, children, title }, ref) => {
    if (children) {
      return (
        <DropDown
          id={id}
          dropDownTitle={label}
          arrowIcon={<ExpandMoreIcon className="idsk-navigation__arrow-icon" />}
          className={cn('idsk-navigation__dropdown', {
            'idsk-navigation__link--dropdown': selected
          })}
          optionClassName="idsk-navigation__dropdown-options"
          buttonClassName={cn('idsk-navigation__dropdown-button', {
            'idsk-navigation__link--dropdown-link': selected
          })}
        >
          {children}
        </DropDown>
      );
    }

    const linkClasses = cn('idsk-navigation__link', {
      'idsk-navigation__link--clicked': selected,
      'idsk-navigation__link--alerted': alert
    });

    return (
      <span className={linkClasses}>
        {linkElement ? (
          linkElement
        ) : (
          <a ref={ref} href={href} onClick={onClick} title={title}>
            {label}
          </a>
        )}
        {!!alert && <span className="idsk-navigation__link-alert">{alert}</span>}
      </span>
    );
  }
);

NavigationLink.displayName = 'NavigationLink';

export default NavigationLink;
