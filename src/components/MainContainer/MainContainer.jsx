import React from 'react';
import './MainContainer.css';

const MainContainer = ({ children }) => {
  return (
    <div className='container'>
      {children}
    </div>
  );
};

export default MainContainer;
