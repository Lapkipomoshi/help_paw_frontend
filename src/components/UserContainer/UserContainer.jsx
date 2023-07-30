import React from 'react';
import './UserContainer.scss';
import Dog from '../../images/dog.png';
import VioletBall from '../Ball/VioletBall/VioletBall';
import OrangeBall from '../Ball/OrangeBall/OrangeBall';
import TurquoiseBall from '../Ball/TurquoiseBall/TurquoiseBall';

function UserContainer({ containerClass, children }) {
  return (
    <div className={`user-container user-container_${containerClass}`}>
      <div className='user-container__container'>
        <img className='user-container__image' src={Dog} alt='Собака' />
        <VioletBall modifier='user' />
        <OrangeBall modifier='user' />
        <TurquoiseBall modifier='user' />
      </div>

      {children}

    </div>
  );
}

export default UserContainer;
