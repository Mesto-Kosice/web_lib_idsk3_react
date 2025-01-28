import React, { ReactNode, useEffect, useState } from 'react';
import FocusLock, { ReactFocusLockProps } from 'react-focus-lock';
import { cn } from '@/lib';

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  fixed?: boolean;
  children?: ReactNode;
  logo?: ReactNode;
  secondaryNavigation?: ReactNode;
  largeMenu?: ReactNode;
  mobileMenu?: ReactNode;
  focusLock?: boolean;
  focusLockProps?: ReactFocusLockProps;
}

const HeaderContainer = ({
  fixed = false,
  children,
  secondaryNavigation,
  className,
  logo,
  largeMenu,
  mobileMenu,
  focusLock = false,
  focusLockProps,
  ...props
}: HeaderProps) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  const headerClasses = cn('idsk-header-container__wrapper', className);

  useEffect(() => {
    function handleWindowResize() {
      setIsDesktop(window.innerWidth < 1120 ? false : true);
    }

    window.addEventListener('load', handleWindowResize);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('load', handleWindowResize);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <FocusLock
      disabled={isDesktop ? true : !focusLock}
      className={cn({
        'idsk-header-container__wrapper--sticky': fixed
      })}
      as="header"
      {...focusLockProps}
    >
      <div className={headerClasses} {...props}>
        {!!secondaryNavigation && secondaryNavigation}
        {(!!children || !!logo) && (
          <div className="idsk-header-container">
            {logo}
            {children}
          </div>
        )}
        {!!largeMenu && <div className="idsk-header-container__menu">{largeMenu}</div>}
        {!!mobileMenu && <div className="idsk-header-container__menu--mobile">{mobileMenu}</div>}
      </div>
    </FocusLock>
  );
};

export default HeaderContainer;
