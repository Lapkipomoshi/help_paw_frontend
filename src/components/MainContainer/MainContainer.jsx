import React from 'react';
import './MainContainer.scss';

const MainContainer = ({ theme = 'base', children }) => {
  return (
    <div className={`container container_theme_${theme}`}>
      <div className='container__content'>
        {children}
      </div>
    </div>
  );
};

export default MainContainer;
