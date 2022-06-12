import { propertiesParser } from "config/parser";
import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Svg = styled(Icon)`
  width: 50px;
  height: 50px;
  color: var(--primary-color);
`;

export const IconEditList = ({ className, onClick }) => {
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
          strokeWidth="0.5"
          d="M15.955 9.006V4.447a.758.758 0 00-.758-.758H4.482a.759.759 0 00-.759.758v10.716c0 .418.34.758.759.758h5.236M13.65 15.921h1.547c.419 0 .758-.34.758-.758v-1.371"
        ></path>
        <path
          fill="currentColor"
          d="M4.255 19.052v-1.883h-.941a.47.47 0 00-.47.471v.941c0 .26.211.471.47.471h.941z"
          transform="rotate(135 13.114 16.565) translate(1.296)"
        ></path>
        <path
          fill="currentColor"
          d="M16.616 18.111c0-.26-2.302-.942-2.562-.942H5.865v1.883h8.189c.26 0 2.562-.733 2.562-.941z"
          transform="rotate(135 13.114 16.565)"
        ></path>
      </Svg>
    </div>
  );
};
