import * as React from 'react';
import { SVGProps } from 'react';

const SvgWhereToVote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C8.14 2 5 5.14 5 9c0 4.17 4.42 9.92 6.23 12.11.4.48 1.13.48 1.53 0C14.58 18.92 19 13.17 19 9c0-3.86-3.14-7-7-7Zm4.31 6.16-5.13 5.13a.996.996 0 0 1-1.41 0L7.7 11.22c-.39-.39-.39-1.03 0-1.42.39-.39 1.03-.39 1.42 0l1.36 1.36 4.42-4.42c.39-.39 1.03-.39 1.42 0 .38.4.38 1.03-.01 1.42Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWhereToVote;
