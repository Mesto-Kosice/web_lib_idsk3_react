import React, { Children, ReactNode } from 'react';
import { AnchorCard, AnchorCardProps, PrimaryButton, PrimaryButtonProps } from '@/components';
import { OpenInNewIcon, ArrowForwardIcon } from '@/svgIcons';
import { cn } from '@/lib';

export interface SignpostProps
  extends Omit<AnchorCardProps, 'grid'>,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
  heading: string;
  arrowIcon?: ReactNode;
  withArrowIcon?: boolean;
  inGroup?: boolean;
  actionButton?: PrimaryButtonProps;
  withoutTargetIcon?: boolean;
}

const CardComponent: React.FC<SignpostProps> = ({
  actionButton,
  layout = 'horizontal',
  inGroup,
  href,
  className,
  icon,
  heading,
  children,
  withoutTargetIcon = false,
  withArrowIcon = true,
  arrowIcon = <ArrowForwardIcon />,
  ...props
}) => {
  const renderAction = !!actionButton && layout === 'horizontal';

  return (
    <AnchorCard
      className={cn(
        { 'idsk-signpost--in-group': inGroup, 'idsk-anchor-card--focusable': !!href },
        className
      )}
      layout={layout}
    >
      {!!icon && (
        <div
          className={cn('idsk-signpost__icon', {
            'idsk-signpost__icon--vertical': layout === 'vertical'
          })}
        >
          {icon}
        </div>
      )}
      <div className="idsk-signpost__container">
        <div>
          <h3
            className={cn('idsk-anchor-card__heading', {
              'idsk-sign-post__link': !!href
            })}
          >
            <span>{heading}</span>
            {props.target === '_blank' && !withoutTargetIcon && (
              <OpenInNewIcon
                data-testid="external-icon"
                className="idsk-anchor-card__heading--external-icon"
              />
            )}
          </h3>
          {!!children && (
            <div
              className={cn('idsk-anchor-card__description', {
                'idsk-anchor-card__description--with-action': renderAction
              })}
            >
              {children}
            </div>
          )}
          {renderAction && <PrimaryButton {...actionButton} />}
        </div>
        {layout === 'vertical' && withArrowIcon && (
          <div className="idsk-signpost__arrow-icon">{arrowIcon}</div>
        )}
      </div>
    </AnchorCard>
  );
};

const Signpost = React.forwardRef<HTMLAnchorElement, SignpostProps>((props, ref) => {
  const { href } = props;

  return href ? (
    <a href={href} ref={ref} {...props} className="idsk-signpost">
      <CardComponent {...props} />
    </a>
  ) : (
    <CardComponent {...props} />
  );
});

export const SignpostsGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  const renderedChildren = Children.map<ReactNode, ReactNode>(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        inGroup: true
      } as SignpostProps);
    }
  });
  return (
    <div className="idsk-signpost-group" {...props}>
      {renderedChildren}
    </div>
  );
};

Signpost.displayName = 'Signpost';

export default Signpost;
