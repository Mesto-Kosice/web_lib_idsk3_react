import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolderShared = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFolderShared;
