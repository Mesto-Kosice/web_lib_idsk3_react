import * as React from 'react';
import { SVGProps } from 'react';

const SvgCommute = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 4H5C3.34 4 2 5.34 2 7v8c0 1.66 1.34 3 3 3l-.77.77a.7.7 0 0 0 0 1 .7.7 0 0 0 1 0L7 18h2v-5H4.5c-.28 0-.5-.22-.5-.5v-6c0-.28.22-.5.5-.5h8c.28 0 .5.22.5.5V8h2V7c0-1.66-1.34-3-3-3ZM5 14c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1Zm15.57-4.34c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66l-1.42 4.11v5.24c0 .55.45.99 1 .99s1-.45 1-1v-1h8v1a1 1 0 0 0 2 .01L22 13.77l-1.43-4.11Zm-7.8.34h6.48c.21 0 .4.14.47.34l.69 2a.5.5 0 0 1-.47.66h-7.85a.5.5 0 0 1-.47-.66l.69-2c.05-.2.24-.34.46-.34ZM12 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCommute;
