import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Svg = styled(Icon)`
  width: 50px;
  height: 50px;
  color: var(--primary-color);
`;

export const IconAddList = ({className}) => {
  return (
    <div className={className}>
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
          strokeWidth="0.5"
          d="M14.382 3.75v-.789a.845.845 0 00-.845-.845H2.995a.845.845 0 00-.845.845v10.542c0 .466.379.845.845.845h.941"
          transform="translate(-1 -1)"
        ></path>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          d="M14.382 11.033V2.961a.845.845 0 00-.845-.845H2.995a.845.845 0 00-.845.845v10.542c0 .466.379.845.845.845h7.935"
          transform="translate(1.573 1.573)"
        ></path>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          d="M7.569 7.161h6.813"
          transform="translate(-1 -1)"
        ></path>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          d="M7.569 7.161h6.813"
          transform="translate(-1 .745)"
        ></path>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          d="M7.569 7.161h6.813"
          transform="translate(-1 2.49)"
        ></path>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          d="M7.569 7.161h6.813"
          transform="translate(-1 4.234)"
        ></path>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.65"
          d="M7.569 7.161h6.813"
          transform="matrix(.44035 0 0 1 11.122 8.76)"
        ></path>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.65"
          d="M7.569 7.161h6.813"
          transform="matrix(0 -.44035 1 0 8.794 20.754)"
        ></path>
        <circle
          cx="16.491"
          cy="16.833"
          r="2.109"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.39"
          transform="translate(-5.396 -5.805) scale(1.28658)"
        ></circle>
      </Svg>
      <pre className="btn-text"> Add List</pre>
    </div>
  );
};
