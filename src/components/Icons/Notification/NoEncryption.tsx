import * as React from 'react';
import { SVGProps } from 'react';

const SvgNoEncryption = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.9 6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2h-4.66L20 17.56V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5-2.32 0-4.26 1.59-4.82 3.74L8.9 6.46V6Zm-3.78-.49a.996.996 0 1 0-1.41 1.41l1.33 1.33C4.42 8.6 4 9.25 4 10v10c0 1.1.9 2 2 2h12.78l.29.29a.996.996 0 1 0 1.41-1.41L5.12 5.51Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNoEncryption;
