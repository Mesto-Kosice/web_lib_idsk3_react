import React, { forwardRef } from 'react';
import { cn } from '@/lib';
import BaseButton, { BaseButtonProps } from './BaseButton';
import { PlaceholderIcon } from '@/svgIcons';

export interface PrimaryIconButtonProps extends BaseButtonProps {
  variant?: 'basic' | 'success' | 'warning';
}

const PrimaryIconButton = forwardRef<HTMLButtonElement, PrimaryIconButtonProps>(
  (
    { variant = 'basic', size = 'medium', className, icon = <PlaceholderIcon />, ...props },
    ref
  ) => {
    return (
      <BaseButton
        {...props}
        ref={ref}
        icon={icon}
        className={cn(
          {
            'idsk-primary-icon-button--basic': variant == 'basic',
            'idsk-primary-icon-button--success': variant == 'success',
            'idsk-primary-icon-button--warning': variant == 'warning',
            'idsk-icon-button--medium': size == 'medium',
            'idsk-icon-button--large': size == 'large'
          },
          className
        )}
      />
    );
  }
);

PrimaryIconButton.displayName = 'PrimaryIconButton';

export default PrimaryIconButton;
