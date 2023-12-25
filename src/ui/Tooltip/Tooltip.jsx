import React from 'react';

import './Tooltip.scss';

const Tooltip = ({ children, className }) => {
  return <div className={`tooltip-container ${className}`}>{children}</div>;
};

export default Tooltip;
