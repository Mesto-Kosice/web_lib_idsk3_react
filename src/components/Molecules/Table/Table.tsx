import React, { ReactNode } from 'react';
import { cn } from '@/lib';

export interface TableProps extends React.AllHTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
  headRow?: ReactNode;
  headRowBordered?: boolean;
  children?: ReactNode;
  actions?: ReactNode;
  align?: 'left' | 'right';
}
export function Table({
  children,
  heading,
  headRow,
  headRowBordered,
  actions,
  className,
  ...props
}: TableProps) {
  return (
    <>
      {heading && <h3 className="idsk-table__heading">{heading}</h3>}
      <table {...props} className={cn('idsk-table', className)}>
        {headRow && (
          <thead>
            <tr
              className={cn('idsk-table__head', {
                'idsk-table__head--bordered': headRowBordered
              })}
            >
              {headRow}
            </tr>
          </thead>
        )}
        <tbody
          className={cn('idsk-table__rows', {
            'idsk-table__rows--bordered-head': headRowBordered
          })}
        >
          {children}
        </tbody>
      </table>
      {actions && <div className="idsk-table__actions">{actions}</div>}
    </>
  );
}

export const TableRow = ({ children, className, ...props }: TableProps) => {
  return (
    <tr {...props} className={cn('idsk-table__row', className)}>
      {children}
    </tr>
  );
};

export const TableRowValue = ({ align, className, children, ...props }: TableProps) => {
  return (
    <td
      {...props}
      className={cn(
        'idsk-table__value',
        {
          'idsk-table__value--right-align': align == 'right'
        },
        className
      )}
    >
      {children}
    </td>
  );
};

export const TableHeadValue = ({ align, className, children, ...props }: TableProps) => {
  return (
    <th
      {...props}
      className={cn(
        'idsk-table__value',
        {
          'idsk-table__value--right-align': align == 'right'
        },
        className
      )}
    >
      {children}
    </th>
  );
};

export default Table;
