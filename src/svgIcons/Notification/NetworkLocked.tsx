import * as React from 'react';
import { SVGProps } from 'react';

const SvgNetworkLocked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 16v-.5a2.5 2.5 0 0 0-5 0v.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1Zm-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.5Zm-1.5-5c.17 0 .33.03.5.05V3.41c0-.89-1.08-1.34-1.71-.71L2.71 18.29c-.63.63-.19 1.71.7 1.71H14v-3c0-.92.42-1.74 1.07-2.3A4.51 4.51 0 0 1 19.5 11Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNetworkLocked;
