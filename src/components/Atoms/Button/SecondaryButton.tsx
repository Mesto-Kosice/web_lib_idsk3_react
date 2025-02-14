import React, { forwardRef } from 'react';
import { cn } from '@/lib';
import BaseButton, { BaseButtonProps } from './BaseButton';

export interface SecondaryButtonProps extends BaseButtonProps {
  variant?: 'basic' | 'success' | 'warning' | 'contrast' | 'transparent';
}

const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ variant = 'basic', size = 'medium', iconPosition = 'left', ...props }, ref) => {
    const className = cn(
      'idsk-secondary-button',
      {
        'idsk-secondary-button--basic': variant == 'basic',
        'idsk-secondary-button--success': variant == 'success',
        'idsk-secondary-button--warning': variant == 'warning',
        'idsk-secondary-button--contrast': variant == 'contrast',
        'idsk-secondary-button--transparent': variant == 'transparent',
        'idsk-secondary-button--medium': size == 'medium',
        'idsk-secondary-button--large': size == 'large',
        'idsk-secondary-button--icon-left': props.icon && iconPosition == 'left',
        'idsk-secondary-button--icon-right': props.icon && iconPosition == 'right'
      },
      props.className
    );

    return <BaseButton ref={ref} {...props} className={className} />;
  }
);

SecondaryButton.displayName = 'SecondaryButton';

export default SecondaryButton;
