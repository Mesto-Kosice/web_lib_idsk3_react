import React, { useEffect, useRef } from 'react';

const TAB_KEY = 9;

export interface FocusLockProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  isLocked?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

const FocusLock: React.FC<FocusLockProps> = ({
  as,
  isLocked = true,
  disabled = false,
  children,
  ...otherProps
}) => {
  const rootNode = useRef<HTMLElement>(null);
  const focusableItems = useRef<NodeListOf<Element>>([] as unknown as NodeListOf<Element>);

  const Component = as || 'div';

  useEffect(() => {
    const updateFocusableItems = () => {
      if (disabled || !rootNode.current) return;

      focusableItems.current = rootNode.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), video'
      );
    };

    const observer = new MutationObserver(() => {
      updateFocusableItems();
    });
    updateFocusableItems();
    observer.observe(rootNode.current as Node, { childList: true });
    return () => {
      observer.disconnect();
    };
  }, [rootNode, disabled]);

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (disabled) return;
      if (!focusableItems.current) return;

      const { keyCode, shiftKey } = event;
      const { length, 0: firstItem, [length - 1]: lastItem } = focusableItems.current;

      if (isLocked && keyCode === TAB_KEY) {
        // If only one item then prevent tabbing when locked
        if (length === 1) {
          event.preventDefault();
          return;
        }

        // If focused on last item then focus on first item when tab is pressed
        if (!shiftKey && document.activeElement === lastItem) {
          event.preventDefault();
          (firstItem as any).focus();
          return;
        }

        // If focused on first item then focus on last item when shift + tab is pressed
        if (shiftKey && document.activeElement === firstItem) {
          event.preventDefault();
          (lastItem as any).focus();
          return;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isLocked, focusableItems, disabled]);

  return (
    <Component {...otherProps} ref={rootNode}>
      {children}
    </Component>
  );
};

export default FocusLock;
