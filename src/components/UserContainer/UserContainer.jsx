import React from 'react';
import './UserContainer.css';
import Dog from '../../images/dog.png';
import VioletBall from '../Ball/VioletBall/VioletBall';
import OrangeBall from '../Ball/OrangeBall/OrangeBall';
import TurquoiseBall from '../Ball/TurquoiseBall/TurquoiseBall';

function UserContainer({ containerClass, children }) {
  return (
    <div className={`user-container user-container_${containerClass}`}>
      <img className='user-container__image' src={Dog} alt='Собака' />
      <VioletBall modifier='user' />
      <OrangeBall modifier='user' />
      <TurquoiseBall modifier='user' />

      {children}

    </div>
  );
}

export default UserContainer;
