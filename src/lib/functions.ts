import React from 'react';

export function cloneThroughFragments(
  children: React.ReactNode,
  customCloneFn: (child: React.ReactNode) => React.ReactNode
): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    const isFragment = child.type === React.Fragment;
    if (isFragment) {
      return cloneThroughFragments((child.props as any).children, customCloneFn);
    }

    return customCloneFn(child);
  });
}

export const formatBytes = (bytes: number, decimals = 0): string => {
  if (bytes === 0) return '0b';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'kB', 'mB', 'gB', 'tB', 'pB', 'eB', 'zB', 'yB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + sizes[i];
};
