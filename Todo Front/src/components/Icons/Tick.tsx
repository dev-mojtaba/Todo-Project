import React from "react";

const TickIcon: React.FC<Include<ClassNameProps, "pathClassName", string>> = ({
  className,
  pathClassName,
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className={"tick-icon" + (className !== undefined ? ` ${className}` : "")}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName}
        d="M16.7286 8.24325C17.5096 7.46221 18.776 7.46221 19.557 8.24325C20.338 9.0243 20.338 10.2906 19.557 11.0717L12.4859 18.1427C10.9238 19.7048 8.39117 19.7048 6.82907 18.1427L5.41414 16.7278C4.63311 15.9468 4.63311 14.6805 5.41414 13.8994C6.19517 13.1184 7.46167 13.1186 8.2427 13.8996C9.02394 14.6809 10.2908 14.6811 11.072 13.8998L16.7286 8.24325Z"
      />
    </svg>
  );
};

export default TickIcon;
