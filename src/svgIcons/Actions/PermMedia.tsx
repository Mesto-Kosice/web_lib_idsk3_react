import * as React from 'react';
import { SVGProps } from 'react';

const SvgPermMedia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 6c-.55 0-1 .45-1 1v4h.01L0 20c0 1.1.9 2 2 2h17c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1Zm21-2h-8l-1.41-1.41c-.38-.38-.89-.59-1.42-.59H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2ZM7.6 14.2l3.51-4.68c.2-.26.59-.27.8-.01l3.1 3.99 2.1-2.53a.5.5 0 0 1 .78.01l2.49 3.2a.5.5 0 0 1-.39.81H8a.491.491 0 0 1-.4-.79Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPermMedia;
