import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Svg = styled(Icon)`
  width: 16px;
  height: 16px;
  color: var(--primary-color);
`;

export const IconReply = ({ className, onClick }) => {
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
          fill="currentColor"
          stroke="currentColor"
          d="M484.81 392.14c.867 9.367-6.027 17.672-15.395 18.543l-6.789.629c-9.375.867-17.672-6.027-18.543-15.395l-.629-6.754c-.023-.23.016-.449.004-.676-9.117-78.961-79.012-136.72-158.39-130.56l31.965 33.527c6.558 6.621 6.512 17.309-.113 23.871l-4.778 4.731c-6.621 6.562-17.305 6.511-23.867-.114l-67.629-70.945-.644-.648a16.839 16.839 0 01-4.891-11.961 16.837 16.837 0 014.996-11.934l.66-.656 68.273-70.301c6.622-6.563 17.309-6.512 23.867.105l4.731 4.77c6.562 6.625 6.512 17.309-.106 23.871l-33.531 34.531c101.15-6.961 189.93 67.547 200.29 168.73l-.093.035.612 6.601z"
          transform="matrix(-.05968 0 0 -.05968 30.61 26.75)"
        />
      </Svg>
      <pre> Reply</pre>
    </div>
  );
};
