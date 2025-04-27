import * as React from "react";
import { SVGProps } from "react";
const RightArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      stroke="#fff"
      d="M7.192 6.265c.41.414.41 1.068 0 1.482l-4.901 4.94-.08.074a1.035 1.035 0 0 1-1.402-.073A1.054 1.054 0 0 1 .5 11.95v-.206l.038-.038c.006-.024.01-.05.018-.073l.036-.099c.053-.124.13-.237.227-.33L4.978 7 .82 2.796v-.001a1.046 1.046 0 0 1 0-1.482 1.036 1.036 0 0 1 1.484 0l4.89 4.952Z"
    />
  </svg>
);
export default RightArrowIcon;
