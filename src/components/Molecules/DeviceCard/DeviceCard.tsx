import React, { ReactElement, ReactNode, SVGProps } from 'react';

import { CardWrapper, CardWrapperProps } from '@/components';
import { cn } from '@/lib';

export interface DeviceCardProps extends Omit<CardWrapperProps, 'innerClassNames'> {
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  title: string;
  button?: ReactNode;
  deviceData?: {
    label?: string;
    description?: string;
  }[];
}

const DeviceCard = ({
  icon = <></>,
  title,
  button,
  deviceData = [],
  children,
  ...props
}: DeviceCardProps) => {
  const iconElement = icon
    ? React.cloneElement(icon, {
        className: cn('idsk-device-card__icon')
      })
    : undefined;

  return (
    <CardWrapper innerClassNames="idsk-device-card" {...props}>
      <div className="idsk-device-card__header">
        {!!iconElement && iconElement}
        <span className="idsk-device-card__title">{title}</span>
        {!!button && <div className="idsk-user-card__button">{button}</div>}
      </div>
      <div className="idsk-device-card__body">
        {!!deviceData?.length &&
          deviceData.map((data, index) => (
            <div className="idsk-device-card__body__data" key={index}>
              <span className="idsk-device-card__body__data-inner">{data?.label}</span>
              <strong>{data?.description}</strong>
            </div>
          ))}
        {children}
      </div>
    </CardWrapper>
  );
};

export default DeviceCard;
