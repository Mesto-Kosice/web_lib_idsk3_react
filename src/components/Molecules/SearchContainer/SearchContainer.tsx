import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForwardRef } from '@/hooks';
import { CancelIcon, SearchIcon } from '@/svgIcons';
import {
  BaseButton,
  PrimaryButton,
  PrimaryButtonProps,
  TextButton,
  TextButtonProps
} from '@/components';
import { cn } from '@/lib';

export interface SearchContainerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  containerClassName?: string;
  error?: boolean;
  errorMsg?: string;
  caption?: string;
  searchButton?: PrimaryButtonProps;
  advancedSearchButton?: TextButtonProps;
  label?: string;
  errorMessageId?: string;
  showCancelButton?: boolean;
  onCancel?: () => void;
  suggestions?: string[];
  suggestionOnClick?: (suggestion: string) => void;
}

const SearchContainer = React.forwardRef<HTMLInputElement, SearchContainerProps>(
  (
    {
      title,
      containerClassName,
      error,
      errorMsg,
      caption,
      searchButton,
      advancedSearchButton,
      label,
      className,
      errorMessageId,
      showCancelButton,
      onCancel,
      suggestions,
      suggestionOnClick,
      ...props
    },
    ref
  ) => {
    const containerClasses: string = cn('idsk-search-container', containerClassName);

    const inputClasses: string = cn(
      'idsk-input',
      'idsk-input--medium',
      'idsk-input--w-full',
      {
        'idsk-input--error': error
      },
      className
    );

    const primaryButtonClasses: string = cn(
      'idsk-search-container__button',
      searchButton?.className
    );

    const advancedSearchButtonClasses: string = cn(
      'idsk-search-container__button',
      advancedSearchButton?.className
    );

    const idForAria: string = errorMessageId || uuidv4();

    const inputRef = useForwardRef<HTMLInputElement>(ref);

    const handleCancel = () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }

      if (onCancel) onCancel();
    };

    return (
      <div className={containerClasses}>
        {!!title && (
          <div className="idsk-search-container__header">
            <h2 className="idsk-search-container__title">{title}</h2>
          </div>
        )}
        <div className="idsk-search-container__input">
          <label className="sr-only" htmlFor={idForAria + '-input'}>
            {label}
          </label>
          <div className="idsk-searchbar__input-wrapper">
            <input
              id={idForAria + '-input'}
              aria-invalid={error}
              aria-errormessage={idForAria}
              className={inputClasses}
              {...props}
              ref={inputRef}
            />
            {!!showCancelButton && (
              <BaseButton className="idsk-searchbar__cancel" onClick={handleCancel}>
                <CancelIcon className="idsk-searchbar__cancel-icon--large" />
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
          {(!!errorMsg || !!caption) && (
            <p
              className={cn('idsk-input__caption', {
                'idsk-input__caption--error': error
              })}
            >
              {error && !!errorMsg ? (
                <span id={idForAria} role="alert">
                  {errorMsg}
                </span>
              ) : (
                <span>{caption}</span>
              )}
            </p>
          )}
        </div>
        <div className="idsk-search-container__buttons">
          <PrimaryButton
            {...searchButton}
            className={primaryButtonClasses}
            iconPosition="left"
            icon={<SearchIcon />}
          />
          <TextButton {...advancedSearchButton} className={advancedSearchButtonClasses} />
        </div>
      </div>
    );
  }
);

SearchContainer.displayName = 'SearchContainer';

export default SearchContainer;
