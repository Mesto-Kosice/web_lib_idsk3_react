import * as React from 'react';
import { SVGProps } from 'react';

const SvgSettingsCell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 24h2v-2H7v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2ZM16 .01 8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99ZM16 16H8V4h8v12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSettingsCell;
