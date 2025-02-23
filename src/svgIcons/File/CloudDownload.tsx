import * as React from 'react';
import { SVGProps } from 'react';

const SvgCloudDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96ZM17 13l-4.65 4.65c-.2.2-.51.2-.71 0L7 13h3V9h4v4h3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCloudDownload;
