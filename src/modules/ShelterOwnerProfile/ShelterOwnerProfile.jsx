import React, { useContext } from 'react';
import './ShelterOwnerProfile.scss';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProfileSheltersBlock from '../../components/ProfileSheltersBlock/ProfileSheltersBlock';

const ShelterOwnerProfile = () => {
  const currentUser = useContext(CurrentUserContext);
  const { subscription_shelter } = currentUser;

  return (
    <div>
      <ProfileSheltersBlock
        shelters={subscription_shelter}
        sheltersTitle='Ваши приюты'
        owner
      />

      <ProfileSheltersBlock
        shelters={subscription_shelter}
        sheltersTitle='Ваши любимые приюты'
      />
    </div>
  );
};

export default ShelterOwnerProfile;
