import React, { ReactNode } from 'react';
import { cn } from '@/lib';
import { Loader, Dialog } from '@/components';
import ErrorImage from '@/svgImages/Illustrations/ErrorImg';

export interface ErrorDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  opened: boolean;
  img?: ReactNode;
  isLoading?: boolean;
  subtitle?: ReactNode;
}

const ErrorDialog: React.FC<ErrorDialogProps> = ({
  opened,
  id,
  className,
  title,
  subtitle,
  children,
  isLoading = false,
  img = <ErrorImage className="idsk-error-dialog__img" />
}) => {
  const childrenClasses = cn('idsk-error-dialog__children', {
    'idsk-error-dialog__children-loading': isLoading
  });
  return (
    <Dialog opened={opened} id={id} className={className}>
      <div className="idsk-error-dialog">
        <div className="idsk-error-dialog__img-wrapper">{img}</div>
        {isLoading ? (
          <Loader className="idsk-error-dialog__loader" />
        ) : (
          <div className="idsk-error-dialog__text-wrapper ">
            {title && <h2 className="idsk-error-dialog__title">{title}</h2>}
            {subtitle && <p className="idsk-error-dialog__subtitle">{subtitle}</p>}
          </div>
        )}
        <div className={childrenClasses}>{children}</div>
      </div>
    </Dialog>
  );
};

export default ErrorDialog;
