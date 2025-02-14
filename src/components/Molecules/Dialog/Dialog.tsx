import React, { ReactNode, useRef } from 'react';
import { FocusLock, FocusLockProps } from '@/components';
import { CloseIcon } from '@/svgIcons';
import { cn } from '@/lib';
import { useClickOutside } from '@/hooks';

export interface DialogProps extends FocusLockProps {
  opened: boolean;
  id?: string;
  title?: string;
  description?: string;
  toggleOpened?: () => void;
  primaryButton?: ReactNode;
  secondaryButton?: ReactNode;
  closeButtonAriaLabel?: string;
  disableClickOutside?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Dialog: React.FC<DialogProps> = ({
  opened,
  toggleOpened,
  id,
  className,
  title,
  description,
  children,
  primaryButton,
  secondaryButton,
  closeButtonAriaLabel,
  disableClickOutside = false,
  ...props
}) => {
  const dialogClasses = cn(
    'idsk-dialog-screen',
    {
      'idsk-dialog-screen--hidden': !opened
    },
    className
  );

  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(() => {
    if (!disableClickOutside && !!toggleOpened) {
      toggleOpened();
    }
  }, modalRef);

  return (
    <>
      {opened && (
        <FocusLock {...props} className={dialogClasses}>
          <div className="idsk-dialog-wrapper">
            <div ref={modalRef} className="idsk-dialog" role="dialog" aria-modal="true">
              {!!title && (
                <div className="idsk-dialog__header">
                  <div className="idsk-dialog__header-title">
                    <h2>{title}</h2>
                    <button
                      onClick={toggleOpened}
                      className="idsk-dialog__close-icon"
                      id={id ? id + '-dialog-close-button' : undefined}
                      aria-label={closeButtonAriaLabel}
                    >
                      <CloseIcon />
                    </button>
                  </div>
                  {!!description && (
                    <p className="idsk-dialog__header-description">{description}</p>
                  )}
                </div>
              )}

              <div className="idsk-dialog__content">{children}</div>

              {!!(secondaryButton || primaryButton) && (
                <div className="idsk-dialog__buttons">
                  {secondaryButton}
                  {primaryButton}
                </div>
              )}
            </div>
          </div>
        </FocusLock>
      )}
    </>
  );
};

export default Dialog;
