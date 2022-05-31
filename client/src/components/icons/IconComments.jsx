import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Svg = styled(Icon)`
  width: 50px;
  height: 50px;
  color: var(--primary-color);
`;

export const IconComments = ({ className, onClick, commentCount }) => {
  return (
    <div className={className} onClick={onClick}>
      <Svg
        // className={className}
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 20 20"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.85"
          d="M8.948 4.782H2.323a.232.232 0 00-.232.232v7.381c0 .128.104.233.232.233l2.634.043.098 4.396 2.926-4.396 8.332-.043a.233.233 0 00.232-.233V8.667"
          transform="translate(.277 5.066) scale(.70765)"
        ></path>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.85"
          d="M16.545 5.014a.232.232 0 00-.232-.232H2.323a.232.232 0 00-.232.232v7.381c0 .128.104.233.232.233l2.634.043.098 4.396 2.926-4.396 8.332-.043a.233.233 0 00.232-.233V5.014"
          transform="matrix(-.70765 0 0 .70765 19.313 1.572)"
        ></path>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
          d="M9.49 6.787h6.842"
          transform="translate(-.057 -.44)"
        ></path>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          d="M9.49 6.787h6.842"
          transform="matrix(.49398 0 0 .49398 -1.32 6.597)"
        ></path>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
          d="M9.49 6.787h6.842"
          transform="translate(-.057 .813)"
        ></path>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
          d="M9.49 6.787h6.842"
          transform="translate(-6.122 4.415)"
        ></path>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
          d="M9.49 6.787h6.842"
          transform="translate(-.057 1.92)"
        ></path>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
          d="M9.49 6.787h6.842"
          transform="translate(-6.122 5.523)"
        ></path>
      </Svg>
    </div>
  );
};
