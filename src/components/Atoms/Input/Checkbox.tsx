import { cn } from '@/lib';
import React, { ReactNode } from 'react';
import { CheckBoxIcon, CheckBoxOutlineBlankIcon, IndeterminateCheckBoxIcon } from '@/svgIcons';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'large' | 'small';
  disabled?: boolean;
  error?: boolean;
  name?: string;
  label?: ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasUncheckIcon?: boolean;
  optionalText?: string;
  mandatory?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      name = 'name',
      inputSize = 'large',
      disabled = false,
      label,
      checked,
      onChange,
      hasUncheckIcon,
      error,
      optionalText,
      mandatory,
      ...props
    },
    ref
  ) => {
    const [hover, setHover] = React.useState(false);
    const hoverClasses = cn('idsk-checkbox__hover', {
      'idsk-checkbox__hover--large': inputSize === 'large' && !!hover,
      'idsk-checkbox__hover--small': inputSize === 'small' && !!hover
    });
    const backgroundClasses = cn('idsk-checkbox__icon-background', {
      'idsk-checkbox__icon-background--large': inputSize === 'large',
      'idsk-checkbox__icon-background--small': inputSize === 'small'
    });
    const textSizeClasses: string = cn('idsk-checkbox', {
      'idsk-checkbox--large': inputSize === 'large',
      'idsk-checkbox--small': inputSize === 'small'
    });
    const iconSizeClasses: string = cn('idsk-checkbox__icon', {
      'idsk-checkbox__icon--large': inputSize === 'large',
      'idsk-checkbox__icon--small': inputSize === 'small',
      'idsk-checkbox__icon--small-disabled': inputSize === 'small' && disabled === true,
      'idsk-checkbox__icon--large-disabled': inputSize === 'large' && disabled === true,
      'idsk-checkbox__icon--error': error
    });
    const uncheckedIconSizeClasses: string = cn('idsk-checkbox__unchecked-icon', {
      'idsk-checkbox__icon--large': inputSize === 'large',
      'idsk-checkbox__icon--small': inputSize === 'small',
      'idsk-checkbox__icon--small-disabled': inputSize === 'small' && disabled === true,
      'idsk-checkbox__icon--large-disabled': inputSize === 'large' && disabled === true,
      'idsk-checkbox__icon--error': error
    });
    const inputClasses: string = cn('idsk-checkbox__input', {
      'idsk-checkbox__input--large': inputSize === 'large',
      'idsk-checkbox__input--small': inputSize === 'small',
      'idsk-checkbox__input--large-disabled': inputSize === 'large' && disabled === true,
      'idsk-checkbox__input--small-disabled': inputSize === 'small' && disabled === true
    });
    const labelClasses: string = cn('idsk-checkbox', {
      'idsk-checkbox__label': !disabled,
      'idsk-checkbox__label--disabled': disabled === true
    });
    return (
      <div className="idsk-checkbox-container">
        <label className={labelClasses}>
          <input
            ref={ref}
            type="checkbox"
            name={name}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            className={inputClasses}
            {...props}
          />
          {!disabled && <div className={hoverClasses}></div>}
          {hasUncheckIcon ? (
            <IndeterminateCheckBoxIcon className={iconSizeClasses} />
          ) : (
            <>
              <div className={backgroundClasses}></div>
              <CheckBoxIcon className={iconSizeClasses} />
            </>
          )}
          <CheckBoxOutlineBlankIcon
            className={uncheckedIconSizeClasses}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
          <div className={textSizeClasses}>
            {label}
            {optionalText && <span className="idsk-input__label--optional"> {optionalText}</span>}
            {mandatory && <span className="idsk-input__label--mandatory">*</span>}
          </div>
        </label>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
