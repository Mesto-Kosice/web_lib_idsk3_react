import * as React from 'react';
import { SVGProps } from 'react';

const SvgApi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 13c-.56.56-1.45.56-2 .01V13c-.55-.55-.55-1.44 0-1.99V11c.55-.55 1.44-.55 1.99 0H13c.55.55.55 1.45 0 2Zm-1-7 2.12 2.12 2.5-2.5-3.2-3.2c-.78-.78-2.05-.78-2.83 0l-3.2 3.2 2.5 2.5L12 6Zm-6 6 2.12-2.12-2.5-2.5-3.2 3.2c-.78.78-.78 2.05 0 2.83l3.2 3.2 2.5-2.5L6 12Zm12 0-2.12 2.12 2.5 2.5 3.2-3.2c.78-.78.78-2.05 0-2.83l-3.2-3.2-2.5 2.5L18 12Zm-6 6-2.12-2.12-2.5 2.5 3.2 3.2c.78.78 2.05.78 2.83 0l3.2-3.2-2.5-2.5L12 18Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgApi;