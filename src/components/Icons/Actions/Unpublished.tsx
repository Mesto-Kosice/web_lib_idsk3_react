import * as React from 'react';
import { SVGProps } from 'react';

const SvgUnpublished = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.49 20.49 3.51 3.51A.996.996 0 1 0 2.1 4.92l1.56 1.56a9.944 9.944 0 0 0-1.59 6.7c.53 4.54 4.21 8.22 8.74 8.74 2.49.29 4.81-.34 6.7-1.59l1.56 1.56c.39.39 1.02.39 1.41 0 .4-.38.4-1.01.01-1.4Zm-10.61-4.6-2.83-2.83a.996.996 0 1 1 1.41-1.41l2.12 2.12.18-.18L12.17 15l-.88.88c-.39.4-1.02.4-1.41.01Zm3.71-5.13-7.1-7.1a9.944 9.944 0 0 1 6.7-1.59c4.54.53 8.22 4.21 8.74 8.74.29 2.49-.34 4.82-1.59 6.7L15 12.17l1.94-1.94a.996.996 0 1 0-1.41-1.41l-1.94 1.94Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUnpublished;
