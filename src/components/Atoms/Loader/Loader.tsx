import React from 'react';
import { SpinnerIcon } from '@/svgIcons';
import { cn } from '@/lib';

export interface LoaderProps extends React.AllHTMLAttributes<HTMLDivElement> {
  label?: string;
  spinnerClassName?: string;
}

const Loader = ({ label, spinnerClassName, ...props }: LoaderProps) => {
  const spinnerClass = cn('idsk-loader__icon', spinnerClassName);

  return (
    <div className="idsk-loader" {...props}>
      <SpinnerIcon className={spinnerClass} />
      {label && <span className="idsk-loader__label">{label}</span>}
    </div>
  );
};

export default Loader;
