import React, { useContext } from 'react';
import './ShelterOwnerProfile.scss';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProfileSheltersBlock from '../../components/ProfileSheltersBlock/ProfileSheltersBlock';

const ShelterOwnerProfile = () => {
  const currentUser = useContext(CurrentUserContext);
  const myShelters = [currentUser.own_shelter];
  return (
    <div>
      <ProfileSheltersBlock
        myShelters={myShelters}
        sheltersTitle='Ваши приюты'
      />
    </div>
  );
};

export default ShelterOwnerProfile;
