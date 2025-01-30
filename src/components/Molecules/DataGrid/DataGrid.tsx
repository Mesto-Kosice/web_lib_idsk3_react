import React, { Children, ReactNode } from 'react';
import { cn } from '@/lib';
import { Checkbox, DropDown, Tag, Tooltip } from '@/components';
import { InfoIcon, MoreVertIcon } from '@/svgIcons';

interface DataGridTagsProps extends React.AllHTMLAttributes<HTMLDivElement> {
  tags?: { label?: string; key?: number }[];
}

export const DataGridTags: React.FC<DataGridTagsProps> = ({ tags }) => {
  return (
    <>
      {tags?.length &&
        tags.map((tag) => {
          return <Tag label={tag.label} key={tag.key} />;
        })}
    </>
  );
};

export interface DataGridRowValueProps extends React.AllHTMLAttributes<HTMLDivElement> {
  information?: string;
  align?: 'left' | 'right';
  className?: string;
}

export const DataGridRowValue: React.FC<DataGridRowValueProps> = ({
  align,
  className,
  children,
  information,
  ...props
}) => {
  return (
    <td
      className={cn(
        'idsk-data-grid__value',
        {
          'idsk-data-grid__value--right-align': align == 'right'
        },
        className
      )}
      {...props}
    >
      {children}
      {information && <InfoIcon className="w-6 h-6" />}
    </td>
  );
};

export interface ClickableRowProps {
  unclickableTargets?: string[];
  onClick: (event: React.MouseEvent<HTMLTableRowElement>) => void;
}

export interface DataGridRowProps extends React.AllHTMLAttributes<HTMLDivElement>, DataGridProps {
  moreIcon?: ReactNode;
  moreOptions?: ReactNode;
  moreOptionsTooltip?: string;
  customMoreButton?: ReactNode;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  checked?: boolean;
  active?: boolean;
  checkbox?: boolean;
  activeDotVisibility?: boolean;
  buttonProps?: ClickableRowProps;
}

export const DataGridRow: React.FC<DataGridRowProps> = ({
  children,
  moreIcon = <MoreVertIcon />,
  moreOptions,
  moreOptionsTooltip,
  customMoreButton,
  checked,
  onChange,
  buttonProps,
  active,
  checkbox,
  checkboxTooltip,
  className,
  activeDotVisibility = false,
  id,
  ...props
}) => {
  const dataGridClasses = cn(
    'idsk-data-grid-row',
    { 'idsk-data-grid-row--active': active },
    { 'idsk-data-grid-row--checked': checked },
    { 'idsk-data-grid-row--clickable': !!buttonProps },
    className
  );
  const noCheckboxClasses = cn('idsk-data-grid-row__dot-wrapper', className);
  const Check = () => (
    <Checkbox
      name="checkbox"
      checked={checked}
      onChange={onChange}
      id={id ? id + '-checkbox' : undefined}
    />
  );

  const handleRowClick = (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
    const tagName = (event.target as HTMLElement)?.tagName ?? '';
    const skipepdTags = buttonProps?.unclickableTargets || ['INPUT', 'path', 'svg'];
    if (!!buttonProps?.onClick && !skipepdTags.includes(tagName)) {
      buttonProps.onClick(event);
    }
  };

  const dataGridRowBody = (
    <>
      {checkbox && (
        <td>
          {checkboxTooltip ? (
            <Tooltip tooltip={checkboxTooltip} isInstructive>
              <Check />
            </Tooltip>
          ) : (
            <Check />
          )}
        </td>
      )}
      {!!active && !!activeDotVisibility && (
        <td className={noCheckboxClasses}>
          <div
            className={cn('idsk-data-grid-row__dot', {
              'idsk-data-grid-row__dot--active': active
            })}
          />
        </td>
      )}
      {children}
      {moreOptions ? (
        <td>
          <DropDown
            dropDownTitle={
              moreOptionsTooltip ? (
                <Tooltip tooltip={moreOptionsTooltip} isInstructive>
                  {moreIcon}
                </Tooltip>
              ) : (
                moreIcon
              )
            }
            optionsSide="left"
            arrowIcon={<></>}
            id={id ? id + '-more-options' : undefined}
          >
            {moreOptions}
          </DropDown>
        </td>
      ) : customMoreButton ? (
        customMoreButton
      ) : null}
    </>
  );

  return (
    <tr
      className={dataGridClasses}
      id={id}
      {...(buttonProps
        ? {
            tabIndex: 0,
            onClick: handleRowClick
          }
        : {})}
      {...props}
    >
      {dataGridRowBody}
    </tr>
  );
};

export interface DataGridProps extends React.AllHTMLAttributes<HTMLDivElement> {
  checkboxEverything?: boolean;
  checkboxTooltip?: string;
  onSelectAllCheck?: (checked: boolean) => void;
  headRow?: ReactNode;
  hasUncheckIcon?: boolean;
}

const DataGrid: React.FC<DataGridProps> = ({
  children,
  checked,
  onSelectAllCheck,
  headRow,
  className,
  checkboxEverything,
  checkboxTooltip,
  hasUncheckIcon,
  id,
  ...props
}) => {
  const renderedChildren = Children.map<ReactNode, ReactNode>(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child);
    }
  });
  const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSelectAllCheck?.(e.currentTarget.checked);
  };
  const CheckAll = () => (
    <Checkbox
      name="checkbox"
      checked={checked}
      onChange={handleSelectAllChange}
      hasUncheckIcon={hasUncheckIcon}
      id={id ? id + '-checkbox-all' : undefined}
    />
  );
  return (
    <table className={cn('idsk-data-grid', className)} id={id} {...props}>
      {headRow && (
        <thead>
          <tr className="idsk-data-grid__head">
            {checkboxEverything && (
              <th>
                {checkboxTooltip ? (
                  <Tooltip tooltip={checkboxTooltip} isInstructive>
                    <CheckAll />
                  </Tooltip>
                ) : (
                  <CheckAll />
                )}
              </th>
            )}
            {headRow}
          </tr>
        </thead>
      )}
      <tbody className={cn({ 'idsk-data-grid__body--without-head': !headRow })}>
        {renderedChildren}
      </tbody>
    </table>
  );
};

export default DataGrid;
