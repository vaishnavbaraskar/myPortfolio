import React from 'react';

const IconLoader = () => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="100"
    height="100"
    fill="none"
    stroke="#64ffda"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Circle outline */}
    <circle
      id="circle"
      cx="50"
      cy="50"
      r="45"
    />

    {/* V Path */}
    <path
      id="V"
      d="M35 35 L50 65 L65 35"
    />
  </svg>
);

export default IconLoader;
