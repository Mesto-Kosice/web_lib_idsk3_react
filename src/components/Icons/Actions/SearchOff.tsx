import * as React from 'react';
import { SVGProps } from 'react';

const SvgSearchOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-4.99-5.58-5.34A6.492 6.492 0 0 0 3.03 9h2.02c.24-2.12 1.92-3.8 4.06-3.98C11.65 4.8 14 6.95 14 9.5c0 2.49-2.01 4.5-4.5 4.5-.17 0-.33-.03-.5-.05v2.02l.01.01c1.8.13 3.47-.47 4.72-1.55l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14Z"
      fill="currentColor"
    />
    <path
      d="M6.12 11.17 4 13.29l-2.12-2.12c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71L3.29 14l-2.12 2.12c-.2.2-.2.51 0 .71.2.2.51.2.71 0L4 14.71l2.12 2.12c.2.2.51.2.71 0 .2-.2.2-.51 0-.71L4.71 14l2.12-2.12c.2-.2.2-.51 0-.71a.513.513 0 0 0-.71 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSearchOff;
