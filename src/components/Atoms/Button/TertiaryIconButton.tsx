import React, { forwardRef } from 'react';
import { cn } from '@/lib';
import BaseButton, { BaseButtonProps } from './BaseButton';
import { PlaceholderIcon } from '@/svgIcons';

export interface TertiaryIconButtonProps extends BaseButtonProps {
  variant?: 'basic' | 'success' | 'warning' | 'neutral';
}

const TertiaryIconButton = forwardRef<HTMLButtonElement, TertiaryIconButtonProps>(
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
          'idsk-tertiary-icon-button',
          {
            'idsk-tertiary-icon-button--basic': variant == 'basic',
            'idsk-tertiary-icon-button--success': variant == 'success',
            'idsk-tertiary-icon-button--warning': variant == 'warning',
            'idsk-tertiary-icon-button--neutral': variant == 'neutral',
            'idsk-icon-button--medium': size == 'medium',
            'idsk-icon-button--large': size == 'large'
          },
          className
        )}
      />
    );
  }
);

TertiaryIconButton.displayName = 'TertiaryIconButton';

export default TertiaryIconButton;
