import React from 'react';
import { cn } from '@/lib';

export interface CardWrapperProps extends React.AllHTMLAttributes<HTMLDivElement> {
  color?: string;
  innerClassNames?: string;
}

const CardWrapper = ({
  color,
  children,
  innerClassNames,
  className,
  ...props
}: CardWrapperProps) => {
  const cssClasses: string = cn(
    'idsk-card-wrapper',
    { 'idsk-card-wrapper--with-color': !!color },
    className
  );

  return (
    <div className={cssClasses} {...props}>
      {!!color && (
        <div style={{ backgroundColor: color }} className="idsk-card-wrapper__color-strip" />
      )}
      <div className={innerClassNames}>{children}</div>
    </div>
  );
};

export default CardWrapper;
