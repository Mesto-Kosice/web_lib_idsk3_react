import React, { useState, ReactElement, SVGProps, ReactNode } from 'react';
import { KeyboardArrowDownIcon } from '@/svgIcons';
import { BaseButton, DropDown } from '@/components';
import { cn } from '@/lib';

type DropDownItem = {
  label: ReactNode;
  key: string;
};

export interface PaginationDropProps {
  title?: ReactNode;
  arrowIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  optionClassName?: string;
  buttonClassName?: string;
  items: DropDownItem[];
  onClick: (item: DropDownItem) => void;
  className?: string;
  caption?: ReactNode;
  id?: string;
  selected?: boolean;
}

export const PaginationDrop: React.FC<PaginationDropProps> = ({
  title,
  arrowIcon = <KeyboardArrowDownIcon />,
  optionClassName,
  buttonClassName,
  caption,
  id,
  onClick,
  items
}) => {
  const [dropTitle, setDropTitle] = useState(title);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownButtonId = id ? id + '-button' : 'pagination-dropdown-button';

  return (
    <div className="idsk-pagination-drop">
      {!!caption && (
        <label className="idsk-pagination__caption" htmlFor={dropdownButtonId}>
          {caption}
        </label>
      )}

      <DropDown
        id={id}
        customTrigger={
          <BaseButton
            id={dropdownButtonId}
            className={cn('idsk-pagination-drop__button', buttonClassName)}
          >
            <span className="idsk-pagination-drop__title">{dropTitle}</span>
            {React.cloneElement(arrowIcon, {
              className: cn('idsk-pagination-drop__icon', { 'rotate-180': isOpen })
            })}
          </BaseButton>
        }
        arrowIcon={<></>}
        optionClassName={cn('idsk-pagination-drop__options', optionClassName)}
        hookOptions={{
          onTriggered: (opened) => setIsOpen(opened)
        }}
      >
        {items.map((item, index) => (
          <BaseButton
            key={item.key}
            id={id ? id + '-option-' + item.key : `pagination-dropdown-option-${index + 1}}`}
            className="idsk-pagination-drop__option text-center"
            ariaLabel={item.label?.toString()}
            onClick={() => {
              onClick(item);
              setDropTitle(item.label);
            }}
          >
            {item.label}
          </BaseButton>
        ))}
      </DropDown>
    </div>
  );
};
