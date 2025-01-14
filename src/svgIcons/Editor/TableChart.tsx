import * as React from 'react';
import { SVGProps } from 'react';

const SvgTableChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 10.02h5V21h-5V10.02ZM17 21h3c1.1 0 2-.9 2-2v-9h-5v11Zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2ZM3 19c0 1.1.9 2 2 2h3V10H3v9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTableChart;
