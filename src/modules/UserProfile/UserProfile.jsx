import React, { useContext } from 'react';
import './UserProfile.scss';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProfileSheltersBlock from '../../components/ProfileSheltersBlock/ProfileSheltersBlock';

const UserProfile = () => {
  const currentUser = useContext(CurrentUserContext);
  const { donations_sum, subscription_shelter } = currentUser;

  return (
    <div>
      <div className='profile__donat'>
        <p className='profile__donat-text standard-font standard-font_type_body'>Вы пожертвовали приютам за всё время:</p>
        <div className='profile__donut-sum'>
          { donations_sum }
          <p className='profile__donat-rubles'>рублей</p>
        </div>
      </div>

      <ProfileSheltersBlock
        shelters={subscription_shelter}
        sheltersTitle='Ваши любимые приюты'
      />

      <ProfileSheltersBlock
        shelters={subscription_shelter}
        sheltersTitle='Приюты, которым вы помогли'
      />
    </div>
  );
};

export default UserProfile;
