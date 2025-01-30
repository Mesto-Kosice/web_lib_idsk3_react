import React from 'react';
import { cn } from '@/lib';

export interface ProgressProps extends React.AllHTMLAttributes<HTMLDivElement> {
  percent?: string;
  width?: string;
  height?: string;
  className?: string;
  emptyColor?: string;
  fillingColor?: string;
}

const Progress: React.FC<ProgressProps> = ({
  emptyColor = '#EFF5FE',
  fillingColor = '#126DFF',
  ...props
}) => {
  const progressClasses = cn('idsk-progress-percent', {
    'idsk-progress-percent-full': props.percent == '100%'
  });
  return (
    <div className="idsk-progress" style={{ background: emptyColor }}>
      <div
        className={progressClasses}
        style={{ width: props.percent, height: props.height, background: fillingColor }}
      ></div>
    </div>
  );
};
export default Progress;
