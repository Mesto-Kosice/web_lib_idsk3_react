import * as React from 'react';
import { SVGProps } from 'react';

const SvgScreenRotation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#screen_rotation_svg__a)">
      <path
        d="M10.23 1.75a1.49 1.49 0 0 0-2.12 0L1.75 8.11a1.49 1.49 0 0 0 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75Zm3.89 18.73L3.52 9.88a.996.996 0 0 1 0-1.41l4.95-4.95a.996.996 0 0 1 1.41 0l10.61 10.61c.39.39.39 1.02 0 1.41l-4.95 4.95c-.39.38-1.03.38-1.42-.01ZM17.61 1.4C16.04.57 14.06-.03 11.81.02c-.18 0-.26.22-.14.35l3.48 3.48 1.33-1.33c3.09 1.46 5.34 4.37 5.89 7.86.06.41.44.69.86.62.41-.06.69-.45.62-.86-.6-3.8-2.96-7-6.24-8.74ZM8.85 20.16l-1.33 1.33a10.504 10.504 0 0 1-5.89-7.86.737.737 0 0 0-.86-.62c-.41.06-.69.45-.62.86.6 3.81 2.96 7.01 6.24 8.75 1.57.83 3.55 1.43 5.8 1.38.18 0 .26-.22.14-.35l-3.48-3.49Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="screen_rotation_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgScreenRotation;
