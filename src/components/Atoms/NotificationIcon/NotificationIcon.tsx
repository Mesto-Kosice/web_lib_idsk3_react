import React, { MouseEventHandler, SVGProps } from 'react';
import { NotificationsIcon, NotificationsAlertIcon } from '@/svgIcons';
import { IconLink } from '@/components';

export interface NotificationIconProps extends SVGProps<SVGSVGElement> {
  alert?: boolean;
  id?: string;
  href?: string;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  active?: boolean;
}

const NotificationIcon = ({
  alert,
  id,
  href,
  ariaLabel,
  ariaExpanded,
  active,
  onClick,
  ...props
}: NotificationIconProps) => {
  return (
    <IconLink
      id={id}
      href={href}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      active={active}
      onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
    >
      {alert ? <NotificationsAlertIcon {...props} /> : <NotificationsIcon {...props} />}
    </IconLink>
  );
};

export default NotificationIcon;
