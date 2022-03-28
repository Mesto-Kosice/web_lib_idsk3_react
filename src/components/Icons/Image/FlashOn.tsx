import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlashOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 3v9c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9a.995.995 0 0 0-.86-1.5H13l2.49-6.65A.994.994 0 0 0 14.56 2H8c-.55 0-1 .45-1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFlashOn;
