import React, { ReactNode, useLayoutEffect } from 'react';
import { cn } from '@/lib';

export interface PageLayoutProps extends React.AllHTMLAttributes<HTMLElement> {
  header: ReactNode;
  heading?: ReactNode;
  footer: ReactNode;
  breadcrumbs?: ReactNode;
  contentClassName?: string;
  informationBanner?: ReactNode;
  informationBannerPosition?: 'top' | 'bottom';
  heroImage?: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  header,
  breadcrumbs,
  informationBanner,
  informationBannerPosition = 'top',
  heading,
  children,
  footer,
  className,
  contentClassName,
  heroImage = <></>,
  ...props
}) => {
  const headingRef = React.useRef<HTMLDivElement>(null);
  const mainRef = React.useRef<HTMLDivElement>(null);

  const [heroHeight, setHeroHeight] = React.useState(0);

  useLayoutEffect(() => {
    const calculateHeroDimensions = () => {
      const bottomLineComponent = headingRef.current?.getBoundingClientRect();
      const topLineComponent = mainRef.current?.getBoundingClientRect();
      setHeroHeight((bottomLineComponent?.bottom ?? 0) - (topLineComponent?.top ?? 0));
    };
    calculateHeroDimensions();
    window.addEventListener('resize', calculateHeroDimensions);
    return () => window.removeEventListener('resize', calculateHeroDimensions);
  }, []);

  return (
    <div className="idsk-page-layout">
      {!!informationBanner && informationBannerPosition === 'top' && informationBanner}
      {header}
      {!!informationBanner && informationBannerPosition === 'bottom' && informationBanner}
      <main className={cn('idsk-page-layout__main', className)} ref={mainRef} {...props}>
        {!!heroImage && (
          <div className="relative h-0 top-[-1.875rem]">
            <div
              className="w-full h-8 absolute inset-x-0 top-0 overflow-hidden"
              style={{ height: `${heroHeight}px` }}
            >
              {heroImage}
            </div>
          </div>
        )}
        {!!breadcrumbs && <div className="idsk-page-layout__breadcrumbs">{breadcrumbs}</div>}
        {!!heading && (
          <div className="idsk-page-layout__heading" ref={headingRef}>
            {heading}
          </div>
        )}
        <div className={cn('idsk-page-layout__content', contentClassName)}>{children}</div>
      </main>
      {footer}
    </div>
  );
};

export default PageLayout;
