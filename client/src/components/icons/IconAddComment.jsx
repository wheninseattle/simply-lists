import { propertiesParser } from "config/parser";
import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Svg = styled(Icon)`
  width: 50px;
  height: 50px;
  color: var(--primary-color);
`;

export const IconAddComment = ({ className,onClick }) => {
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
          // strokeWidth="0.5"
          d="M17.823 9.491V5.334a.233.233 0 00-.233-.233H3.487a.233.233 0 00-.233.233v7.498c0 .129.104.234.233.234h2.532l.098 4.396 2.926-4.396h3.404"
          transform="translate(-1.396 -.319)"
        ></path>
        <circle
          cx="15.775"
          cy="12.355"
          r="2.364"
          fill="none"
          stroke="#000"
          strokeWidth="0.5"
          transform="translate(-.988)"
        ></circle>
        <path
          fill="none"
          stroke="#000"
          strokeWidth="0.82"
          d="M13.411 2.219h3.108"
          transform="translate(.427 9.531) matrix(.61043 0 0 .61043 5.225 1.47)"
        ></path>
        <path
          fill="none"
          stroke="#000"
          strokeWidth="0.82"
          d="M13.411 2.219h3.108"
          transform="translate(.427 9.531) matrix(0 -.61043 .61043 0 13.005 11.96)"
        ></path>
      </Svg>
      <pre> Add Comment</pre>
    </div>
  );
};
