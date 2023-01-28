import React from 'react';
import './UserContainer.css';
import Dog from '../../images/dog.png';

function UserContainer({ containerClass, children }) {
  return (
    <div className={containerClass}>
      <img className='user-container__image' src={Dog} alt='Собака' />

      {children}

    </div>
  );
}

export default UserContainer;
