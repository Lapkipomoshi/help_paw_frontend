import React from 'react';
import './ProfileContainer.css';
import Dog from '../../images/dog.png';
import VioletBall from '../Ball/VioletBall/VioletBall';
import OrangeBall from '../Ball/OrangeBall/OrangeBall';
import TurquoiseBall from '../Ball/TurquoiseBall/TurquoiseBall';

function ProfileContainer({ containerClass, children }) {
  return (
    <div className={`profile-container profile-container_${containerClass}`}>
      {children}
      <img className='profile-container__image' src={Dog} alt='Собака' />
      <VioletBall modifier='profile' />
      <OrangeBall modifier='profile' />
      <TurquoiseBall modifier='profile' />
    </div>
  );
}

export default ProfileContainer;
