import * as React from 'react';
import { SVGProps } from 'react';

const SvgNotStarted = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 13c0 .55-.45 1-1 1s-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6Zm5.02-2.22-2.4 1.92a.998.998 0 0 1-1.62-.78v-3.84c0-.84.97-1.3 1.62-.78l2.4 1.92c.5.4.5 1.16 0 1.56Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNotStarted;
