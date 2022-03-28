import * as React from 'react';
import { SVGProps } from 'react';

const SvgSortByAlpha = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.93 2.65c-.2-.2-.51-.2-.71 0l-2.01 2.01h4.72l-2-2.01Zm-.7 18.7c.2.2.51.2.71 0l1.98-1.98h-4.66l1.97 1.98Zm-1.25-3.62c.6 0 1.01-.6.79-1.16L8.04 7.03a1.205 1.205 0 0 0-2.24 0l-3.74 9.53c-.22.56.19 1.16.79 1.16.35 0 .67-.22.8-.55l.71-1.9h5.11l.71 1.9c.13.34.45.56.8.56Zm-6.01-4.09 1.94-5.18 1.94 5.18H4.97Zm16.08 2.5h-5.33l5.72-8.29c.46-.66-.02-1.57-.82-1.57h-6.48c-.44 0-.79.36-.79.8v.01c0 .44.36.8.79.8h5.09l-5.73 8.28c-.46.66.02 1.57.82 1.57h6.72c.44 0 .79-.36.79-.79a.776.776 0 0 0-.78-.81Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSortByAlpha;
