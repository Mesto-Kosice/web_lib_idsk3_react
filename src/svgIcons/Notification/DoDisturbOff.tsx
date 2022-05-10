import * as React from 'react';
import { SVGProps } from 'react';

const SvgDoDisturbOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 11v2h-.88l4.33 4.33A9.9 9.9 0 0 0 22 12c0-5.52-4.48-10-10-10a9.9 9.9 0 0 0-5.33 1.55L14.12 11H17Zm4.17 9.88L3.12 2.83a.996.996 0 1 0-1.41 1.41l2.07 2.07A9.975 9.975 0 0 0 2 12c0 5.52 4.48 10 10 10 2.11 0 4.07-.66 5.68-1.78l2.07 2.07c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41ZM7 13v-2h1.46l2 2H7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDoDisturbOff;