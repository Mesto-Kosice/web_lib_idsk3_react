import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowCircleUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0 2c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10Zm-1-10v3c0 .55.45 1 1 1s1-.45 1-1v-3h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.2-.2-.51-.2-.71 0l-2.79 2.79a.5.5 0 0 0 .36.85H11Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowCircleUp;
