import * as React from 'react';
import { SVGProps } from 'react';

const SvgBiotech = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3 0-1.09.59-2.04 1.46-2.56C8.17 9.03 8 8.54 8 8c0-.21.04-.42.09-.62A5.01 5.01 0 0 0 5 12c0 2.76 2.24 5 5 5v2H7Z"
      fill="currentColor"
    />
    <path
      d="M10.56 5.51C11.91 5.54 13 6.64 13 8c0 .75-.33 1.41-.85 1.87l.25.68c.19.52.76.79 1.28.6.19.52.76.79 1.28.6.52-.19.79-.76.6-1.28.52-.19.79-.76.6-1.28L14.1 3.54a.998.998 0 0 0-1.28-.6.998.998 0 0 0-1.28-.6c-.52.19-.79.76-.6 1.28-.52.19-.79.76-.6 1.28l.22.61Z"
      fill="currentColor"
    />
    <path d="M10.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="currentColor" />
  </svg>
);

export default SvgBiotech;
