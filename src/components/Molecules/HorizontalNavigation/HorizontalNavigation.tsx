import React, { AllHTMLAttributes } from 'react';
import { BaseButton, BaseButtonProps } from '@/components';
import { DropDown } from '@/components';
import { ExpandMoreIcon } from '@/svgIcons';
import { cn } from '@/lib';

export interface HorizontalNavigationItemProps extends BaseButtonProps {
  active?: boolean;
  hideLabelOnMobile?: boolean;
}
export const HorizontalNavigationItem: React.FC<HorizontalNavigationItemProps> = ({
  className,
  active = false,
  hideLabelOnMobile = false,
  ...props
}) => {
  const elementClasses = cn(
    'idsk-horizontal-navigation-item',
    {
      'idsk-horizontal-navigation--hide-label-on-mobile': hideLabelOnMobile,
      'idsk-horizontal-navigation-item--active': active
    },
    className
  );

  return (
    <BaseButton
      buttonElementProps={{ role: 'tab', 'aria-selected': active }}
      {...props}
      className={elementClasses}
      withBoldPseudoElement
    />
  );
};

export interface HorizontalNavigationGroupProps extends AllHTMLAttributes<HTMLDivElement> {
  dropdownOnMobile?: boolean;
  dropdownLabel?: string;
  hideLabelOnMobile?: boolean;
}

export const HorizontalNavigationGroup: React.FC<HorizontalNavigationGroupProps> = ({
  dropdownOnMobile = true,
  dropdownLabel = 'Missing label',
  hideLabelOnMobile = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      role="tablist"
      {...props}
      className={cn(
        'idsk-horizontal-navigation-group',
        {
          'idsk-horizontal-navigation-group--hide-on-mobile': dropdownOnMobile,
          'idsk-horizontal-navigation--hide-label-on-mobile': hideLabelOnMobile
        },
        className
      )}
    >
      {dropdownOnMobile && (
        <DropDown
          dropDownTitle={dropdownLabel}
          arrowIcon={<ExpandMoreIcon className="idsk-navigation__arrow-icon" />}
        >
          {children}
        </DropDown>
      )}
      {children}
    </div>
  );
};

export interface HorizontalNavigationProps extends AllHTMLAttributes<HTMLDivElement> {
  dropdownOnMobile?: boolean;
  mobileView?: 'grid' | 'list';
}

export const HorizontalNavigation: React.FC<HorizontalNavigationProps> = ({
  children,
  className,
  mobileView = 'list',
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        'idsk-horizontal-navigation',
        {
          'idsk-horizontal-navigation--list-view': mobileView == 'list',
          'idsk-horizontal-navigation--grid-view': mobileView == 'grid'
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default HorizontalNavigation;
