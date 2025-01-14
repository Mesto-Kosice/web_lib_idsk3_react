import * as React from 'react';
import { SVGProps } from 'react';

const SvgInvertColorsOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 5.1v4.05l7.4 7.4c1.15-2.88.59-6.28-1.75-8.61l-4.94-4.95a.996.996 0 0 0-1.41 0L8.56 5.71l1.41 1.41L12 5.1Zm-8.31-.02a.996.996 0 0 0 0 1.41l2.08 2.08a8.003 8.003 0 0 0 .57 10.68A8.011 8.011 0 0 0 12 21.58c1.78 0 3.56-.59 5.02-1.77l2 2a.996.996 0 1 0 1.41-1.41L5.11 5.08c-.39-.39-1.03-.39-1.42 0ZM12 19.59c-1.6 0-3.11-.62-4.24-1.76A5.945 5.945 0 0 1 6 13.59c0-1.32.43-2.56 1.21-3.59L12 14.79v4.8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgInvertColorsOff;
