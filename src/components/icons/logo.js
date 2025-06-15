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
    {/* Hexagon shape */}
    <polygon
      points="50,5 90,25 90,75 50,95 10,75 10,25"
      fill="none"
      stroke="#64ffda"
    />

    {/* Centered V */}
    <text
      x="50"
      y="62"
      textAnchor="middle"
      fill="#64ffda"
      fontSize="40"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
    >
      V
    </text>
  </svg>
);

export default IconLoader;
