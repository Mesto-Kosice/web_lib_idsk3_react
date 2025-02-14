import React, { ReactNode } from 'react';
import { AvatarCircle } from '@/components';

export interface IdentificationCardProps extends React.AllHTMLAttributes<HTMLDivElement> {
  firstName: string;
  lastName: string;
  fullName: string;
  identification: string;
  children?: ReactNode;
}

const IdentificationCard: React.FC<IdentificationCardProps> = ({
  firstName,
  lastName,
  fullName,
  identification,
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`idsk-identification-card ${className}`} {...props}>
      <AvatarCircle
        firstName={firstName}
        lastName={lastName}
        fullName={fullName}
        buttonClasses="idsk-identification-card__avatar"
        disabled={true}
      />
      <div className="idsk-identification-card__full-name">{fullName}</div>
      <div className="idsk-identification-card__identification">{identification}</div>
      {children}
    </div>
  );
};
export default IdentificationCard;
