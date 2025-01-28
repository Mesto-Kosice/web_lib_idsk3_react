import React, { ReactNode, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import { ReactFocusLockProps } from 'react-focus-lock';
import { CloseIcon } from '@/svgIcons';
import { useClickOutside } from '@/hooks';
import { Tooltip } from '@/components';
import { cn } from '@/lib';

export interface ModalSideBarProps extends React.AllHTMLAttributes<HTMLDivElement> {
  opened: boolean;
  toggleOpened: React.Dispatch<React.SetStateAction<boolean>>;
  heading: string;
  footer?: ReactNode | undefined;
  id?: string;
  closeButtonAriaLabel?: string;
  focusLockProps?: ReactFocusLockProps;
  disableClickOutside?: boolean;
  closeButtonTooltip?: string;
}

const ModalSideBar = ({
  opened,
  toggleOpened,
  heading,
  footer,
  children,
  className,
  id,
  closeButtonAriaLabel,
  focusLockProps,
  disableClickOutside = false,
  closeButtonTooltip,
  ...props
}: ModalSideBarProps) => {
  const shadowClasses = cn('idsk-modal-sidebar__shadow', {
    'idsk-modal-sidebar__shadow--hidden': !opened
  });
  const sidebarClasses = cn(
    'idsk-modal-sidebar',
    {
      'idsk-modal-sidebar--hidden': !opened
    },
    className
  );

  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(() => {
    if (!disableClickOutside) {
      toggleOpened(false);
    }
  }, modalRef);

  return (
    <>
      {opened && (
        <FocusLock {...focusLockProps}>
          <div className={shadowClasses} data-testid="sidebar-shadow" />
          <div
            ref={modalRef}
            className={sidebarClasses}
            id={id}
            aria-modal="true"
            role="dialog"
            {...props}
          >
            <div className="idsk-modal-sidebar__top-bar" />
            <div className="idsk-modal-sidebar__header">
              <h2 className="idsk-headline-3">{heading}</h2>
              <button
                className="idsk-modal-sidebar__close-button"
                onClick={() => toggleOpened(false)}
                id={id ? id + '-close-button' : undefined}
                aria-label={closeButtonAriaLabel}
              >
                {closeButtonTooltip ? (
                  <Tooltip tooltip={closeButtonTooltip} alignLeft isInstructive>
                    <CloseIcon className="idsk-modal-sidebar__close-icon" />
                  </Tooltip>
                ) : (
                  <CloseIcon className="idsk-modal-sidebar__close-icon" />
                )}
              </button>
            </div>
            <div className="idsk-modal-sidebar__body">{children}</div>
            <div className="flex-auto" />
            {!!footer && <div className="idsk-modal-sidebar__footer">{footer}</div>}
          </div>
        </FocusLock>
      )}
    </>
  );
};

export default ModalSideBar;
