import React from 'react';
import { cn } from '@/lib';

const CardsContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={cn('idsk-cards-container', className)} {...props}>
      {children}
    </div>
  );
};

export default CardsContainer;
