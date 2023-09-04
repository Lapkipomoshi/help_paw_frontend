import React from 'react';

import './Tooltip.scss';

const Tooltip = ({ children }) => {
  return <div className='tooltip-container'>{children}</div>;
};

export default Tooltip;
