import * as React from 'react';
import { SVGProps } from 'react';

const SvgNextPlan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm6 11.97h-5l2.26-2.26a4.94 4.94 0 0 0-3.76-1.74c-2.37 0-4.35 1.66-4.86 3.88l-.96-.32c.64-2.62 3-4.56 5.82-4.56 1.78 0 3.37.79 4.47 2.03L18 8.97v5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNextPlan;
