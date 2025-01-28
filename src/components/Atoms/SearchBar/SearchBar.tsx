import React, { useState, useRef, ReactNode } from 'react';
import { cn } from '@/lib';
import { IconLink, BaseButton } from '@/components';
import { SearchIcon, CancelIcon } from '@/svgIcons';
import { useForwardRef } from '@/hooks';

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  buttonLabel?: string | ReactNode;
  buttonAriaLabel?: string;
  buttonDisabled?: boolean;
  buttonOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  searchbarSize?: 'large' | 'medium' | 'small';
  openable?: boolean;
  fullWidth?: boolean;
  containerClassName?: string;
  wrapperClassName?: string;
  error?: boolean;
  errorMsg?: string;
  label?: string;
  showCancelButton?: boolean;
  cancelButtonAriaLabel?: string;
  onCancel?: () => void;
  suggestions?: string[];
  suggestionOnClick?: (suggestion: string) => void;
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      buttonLabel,
      buttonAriaLabel,
      buttonDisabled,
      placeholder,
      searchbarSize = 'large',
      openable = false,
      fullWidth = false,
      containerClassName,
      wrapperClassName,
      className,
      buttonOnClick,
      id,
      error,
      errorMsg,
      label,
      showCancelButton,
      cancelButtonAriaLabel,
      onCancel,
      suggestions,
      suggestionOnClick,
      ...props
    }: SearchBarProps,
    ref
  ) => {
    const [searchbarOpened, setSearchbarOpened] = useState<boolean>(false);

    const inputClasses: string = cn(
      'idsk-searchbar',
      {
        'idsk-searchbar--large': searchbarSize === 'large',
        'idsk-searchbar--medium': searchbarSize === 'medium',
        'idsk-searchbar--small': searchbarSize === 'small',
        'idsk-searchbar--w-full': fullWidth,
        'idsk-searchbar--error': error
      },
      className
    );
    const buttonClasses: string = cn('idsk-searchbar__button', {
      'idsk-searchbar__button--large': searchbarSize === 'large',
      'idsk-searchbar__button--medium': searchbarSize === 'medium',
      'idsk-searchbar__button--small': searchbarSize === 'small'
    });
    const iconClasses: string = cn({
      'idsk-searchbar__icon--large': searchbarSize === 'large',
      'idsk-searchbar__icon--medium': searchbarSize === 'medium',
      'idsk-searchbar__icon--small': searchbarSize === 'small'
    });

    const searchbarCancelIconClasses: string = cn({
      'idsk-searchbar__cancel-icon--large': searchbarSize === 'large'
    });

    const contentClasses = cn(
      'idsk-searchbar__wrapper',
      {
        'idsk-searchbar__wrapper--full-width': fullWidth,
        hidden: openable && !searchbarOpened
      },
      wrapperClassName
    );

    const buttonRef = useRef<HTMLButtonElement>(null);
    const inputRef = useForwardRef<HTMLInputElement>(ref);

    const handleCancel = () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }

      if (onCancel) onCancel();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Escape') {
        handleCancel();
      } else if (e.key === 'Enter') {
        const btn = buttonRef.current;
        if (btn) btn.click();
      }
    };

    return (
      <div className={containerClassName}>
        {openable && (
          <IconLink
            onClick={() => setSearchbarOpened((p) => !p)}
            className={searchbarOpened ? 'hidden' : ''}
          >
            <SearchIcon />
          </IconLink>
        )}
        <div className={contentClasses}>
          <label className="sr-only" htmlFor={id ? id + '-input' : undefined}>
            {label}
          </label>
          <div className="idsk-searchbar__input-wrapper">
            <input
              className={inputClasses}
              placeholder={placeholder}
              id={id ? `${id}-input` : undefined}
              ref={inputRef}
              aria-describedby={id ? `${id}-error` : undefined}
              onKeyDown={handleKeyDown}
              {...props}
            />

            {!!showCancelButton && (
              <BaseButton
                className="idsk-searchbar__cancel"
                onClick={handleCancel}
                ariaLabel={cancelButtonAriaLabel}
              >
                <CancelIcon className={searchbarCancelIconClasses} />
              </BaseButton>
            )}
            {!!suggestions?.length && (
              <ul className="idsk-dropdown__options w-full" data-testid="dropdown-options">
                {suggestions.map((suggestion, index) => (
                  <li
                    className="idsk-dropdown__option cursor-pointer"
                    key={index}
                    onClick={() => {
                      inputRef.current.value = suggestion;
                      inputRef.current.focus();
                      suggestionOnClick?.(suggestion);
                    }}
                  >
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            onClick={buttonOnClick}
            className={buttonClasses}
            disabled={buttonDisabled || error}
            ref={buttonRef}
            id={id ? id + '-button' : undefined}
            aria-label={buttonAriaLabel}
          >
            <SearchIcon className={iconClasses} />
            {buttonLabel}
          </button>
        </div>
        {error && !!errorMsg && (
          <p id={id ? `${id}-error` : undefined} className="idsk-input__caption--error">
            {errorMsg}
          </p>
        )}
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';

export default SearchBar;
