import * as React from 'react';
import { SVGProps } from 'react';

const SvgLowPriority = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 5h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1Zm0 5.5h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1Zm0 5.5h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1Zm-5.15 3.15 1.79-1.79c.2-.2.2-.51 0-.71l-1.79-1.79a.495.495 0 0 0-.85.35v3.59c0 .44.54.66.85.35ZM9 16h-.3c-2.35 0-4.45-1.71-4.68-4.05A4.509 4.509 0 0 1 8.5 7H11c.55 0 1-.45 1-1s-.45-1-1-1H8.5c-3.86 0-6.96 3.4-6.44 7.36C2.48 15.64 5.43 18 8.73 18H9"
      fill="currentColor"
    />
  </svg>
);

export default SvgLowPriority;
