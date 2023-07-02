import React, { useContext } from 'react';
import './UserProfile.scss';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProfileSheltersBlock from '../../components/ProfileSheltersBlock/ProfileSheltersBlock';

const UserProfile = () => {
  const currentUser = useContext(CurrentUserContext);
  const { donations_sum, subscription_shelter } = currentUser;

  return (
    <div>
      <div className='user-profile__donation'>
        <p className='user-profile__donation-text standard-font standard-font_type_body'>Вы пожертвовали приютам за всё время:</p>
        <div className='user-profile__donation-sum'>
          { donations_sum }
          <p className='user-profile__donation-rubles'>рублей</p>
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
