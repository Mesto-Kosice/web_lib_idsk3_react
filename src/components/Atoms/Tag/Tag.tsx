import React, { ReactNode, ReactElement, SVGProps } from 'react';
import { CheckIcon, CloseIcon } from '@/svgIcons';
import { BaseButton } from '@/components';
import { cn } from '@/lib';

type TagVariant = 'default' | 'basic' | 'warning' | 'success' | 'attention';

type TagCustomColors = {
  border: string;
  background: string;
  color: string;
};

interface BaseTagProps extends React.HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  leftIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  rightIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  disabled?: boolean;
  size?: 'small' | 'medium';
}

interface StaticTagProps extends BaseTagProps {
  type?: 'static';
  variant?: TagVariant;
  colors?: TagCustomColors;
}

interface SelectTagProps extends BaseTagProps {
  type?: 'select';
  variant?: 'default';
  selected?: boolean;
}

interface ActionTagProps extends BaseTagProps {
  type?: 'action';
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  variant?: TagVariant;
}

interface FilterTagProps extends BaseTagProps {
  type?: 'filter';
  variant?: 'default';
  selected?: boolean;
}

export type TagProps = SelectTagProps | StaticTagProps | ActionTagProps | FilterTagProps;

const Tag = ({
  label,
  leftIcon,
  rightIcon,
  size = 'medium',
  disabled = false,
  type = 'static',
  variant = 'default',
  className,
  ...props
}: TagProps) => {
  const { colors, ...propsWithSelect } = props as StaticTagProps;
  const { selected, ...propsWithOnClose } = propsWithSelect as SelectTagProps;
  const { onClose, ...divProps } = propsWithOnClose as ActionTagProps;

  const getVariantClass = () => {
    if (type === 'static' || type === 'action') {
      return cn({
        'idsk-tag--success': variant === 'success',
        'idsk-tag--warning': variant === 'warning',
        'idsk-tag--attention': variant === 'attention',
        'idsk-tag--basic': variant === 'basic',
        'idsk-tag--default': variant === 'default'
      });
    }
    return 'idsk-tag--default';
  };

  const getTagClasses = (): string => {
    if (disabled) return 'idsk-tag--disabled';

    return cn(getVariantClass(), {
      'idsk-tag--with-interactions': type === 'filter' || type === 'select',
      'idsk-tag--selected': selected,
      'idsk-tag--small': size == 'small'
    });
  };

  return (
    <div
      className={cn('idsk-tag', getTagClasses(), className)}
      tabIndex={type !== 'static' ? 0 : -1}
      {...(colors
        ? {
            style: {
              color: colors.color,
              backgroundColor: colors.background,
              borderColor: colors.border
            }
          }
        : {})}
      {...divProps}
    >
      {type === 'filter' && selected && <CheckIcon />}
      {leftIcon}
      {label}
      {rightIcon}
      {type === 'action' && (
        <BaseButton
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            if (!disabled && !!onClose) {
              onClose(e);
            }
          }}
        >
          <CloseIcon className="w-5 h-5" />
        </BaseButton>
      )}
    </div>
  );
};

export default Tag;
