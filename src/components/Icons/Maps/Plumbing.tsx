import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlumbing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m19.28 4.93-2.12-2.12c-.78-.78-2.05-.78-2.83 0L11.5 5.64l2.12 2.12 2.12-2.12 3.54 3.54a3.012 3.012 0 0 0 0-4.25ZM5.49 13.77c.59.59 1.54.59 2.12 0l2.47-2.47-2.12-2.13-2.47 2.47c-.59.59-.59 1.54 0 2.13Z"
      fill="currentColor"
    />
    <path
      d="m14.33 8.46-.71.71-3.18-3.18a1.49 1.49 0 0 0-2.12 0 1.49 1.49 0 0 0 0 2.12l3.18 3.18-7 7c-.7.7-.88 1.84-.29 2.65a2.005 2.005 0 0 0 3.05.26l9.19-9.2a.996.996 0 1 0 1.41-1.41l-2.12-2.12a.987.987 0 0 0-1.41-.01Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPlumbing;
