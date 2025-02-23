import * as React from 'react';
import { SVGProps } from 'react';

const SvgLocationCity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 11V5.83c0-.53-.21-1.04-.59-1.41L12.7 2.71a.996.996 0 0 0-1.41 0l-1.7 1.7C9.21 4.79 9 5.3 9 5.83V7H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-4Zm-8 8H5v-2h2v2Zm0-4H5v-2h2v2Zm0-4H5V9h2v2Zm6 8h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2V9h2v2Zm0-4h-2V5h2v2Zm6 12h-2v-2h2v2Zm0-4h-2v-2h2v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLocationCity;
