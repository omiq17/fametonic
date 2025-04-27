import * as React from "react";
import { SVGProps } from "react";
const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={23}
    fill="none"
    {...props}
  >
    <path fill="#fff" d="M0 22.54h22v-22H0v22Z" />
  </svg>
);
export default StarIcon;
