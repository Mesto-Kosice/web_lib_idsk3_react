'use client';

import React, { useState, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';

import { DropDown } from '../../Atoms';
import { ExpandMoreIcon } from '../../../svgIcons/Navigation';

export interface SecondaryNavProps extends React.AllHTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
  headingButton?: ReactNode;
  mobileHeading?: ReactNode;
  mobileHeadingButton?: ReactNode;
  dropDownTitle?: string;
  dropDownOptions?: ReactElement[];
  bodyClassName?: string;
}

interface HeadingButtonProps extends SecondaryNavProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeadingButton: React.FC<HeadingButtonProps> = ({
  mobileHeadingButton,
  headingButton,
  opened,
  id,
  heading,
  setOpened,
  children
}) => {
  const asBtn = !!children;
  const Component = (asBtn ? 'button' : 'span') as React.ElementType;

  const componentProps = {
    id: id ? id + '-heading-button' : undefined,
    className: classNames('idsk-secondary-navigation__heading-button', {
      'idsk-secondary-navigation__heading-button--no-content': !asBtn
    }),
    ...(asBtn
      ? {
          onClick: () => setOpened((p: boolean) => !p),
          'aria-expanded': opened,
          'aria-controls': id ? id + '-body' : undefined,
          'aria-label': heading + ' ' + headingButton
        }
      : {})
  };

  return (
    <>
      {!!headingButton && (
        <Component {...componentProps}>
          {mobileHeadingButton && (
            <span className="idsk-secondary-navigation__heading-mobile">{mobileHeadingButton}</span>
          )}
          <span className="idsk-secondary-navigation__heading-desktop">{headingButton}</span>
          {asBtn && (
            <ExpandMoreIcon
              className={classNames('idsk-secondary-navigation__heading-button-icon', {
                'rotate-180': opened
              })}
            />
          )}
        </Component>
      )}
    </>
  );
};

const SecondaryNavigation: React.FC<SecondaryNavProps> = (props) => {
  const [opened, setOpened] = useState<boolean>(false);

  const {
    children,
    heading,
    headingButton,
    mobileHeading,
    mobileHeadingButton,
    dropDownTitle,
    dropDownOptions = [],
    className,
    bodyClassName,
    id,
    ...other
  } = props;

  return (
    <div className={classNames('idsk-secondary-navigation', className)} {...other}>
      <div className="idsk-secondary-navigation__header">
        <div className="idsk-secondary-navigation__heading">
          <div className="idsk-secondary-navigation__heading-title">
            {!!mobileHeading && (
              <span className="idsk-secondary-navigation__heading-mobile">{mobileHeading} </span>
            )}
            {!!heading && (
              <span className="idsk-secondary-navigation__heading-desktop">{heading} </span>
            )}
            <HeadingButton opened={opened} setOpened={setOpened} {...props} />
          </div>
          {!!children && (
            <div
              id={id ? id + '-body' : undefined}
              className={classNames('idsk-secondary-navigation__body', bodyClassName, {
                hidden: !opened
              })}
              data-testid="secnav-children"
            >
              {children}
            </div>
          )}
        </div>

        {dropDownTitle || dropDownOptions.length > 0 ? (
          <DropDown
            id={id ? id : undefined}
            dropDownTitle={dropDownTitle}
            className="idsk-secondary-navigation__dropdown"
            closeOnOptionClick={true}
            arrowIcon={<ExpandMoreIcon />}
          >
            {dropDownOptions.length &&
              dropDownOptions.map((item, index) => React.cloneElement(item, { key: index }))}
          </DropDown>
        ) : null}
      </div>
    </div>
  );
};

export default SecondaryNavigation;
