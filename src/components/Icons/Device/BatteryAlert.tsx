import * as React from 'react';
import { SVGProps } from 'react';

const SvgBatteryAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.34 22h7.32c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4ZM13 18h-2v-2h2v2Zm0-5c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBatteryAlert;
