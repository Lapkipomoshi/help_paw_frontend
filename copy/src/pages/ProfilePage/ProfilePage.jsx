import React, { useContext } from 'react';
import './ProfilePage.scss';
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer';
import MainContainer from '../../components/MainContainer/MainContainer';
import UserProfile from '../../modules/UserProfile/UserProfile';
import ShelterOwnerProfile from '../../modules/ShelterOwnerProfile/ShelterOwnerProfile';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const ProfilePage = () => {
  const currentUser = useContext(CurrentUserContext);
  const { username, status } = currentUser;

  return (
    <MainContainer>
      <main className='main'>
        <section className='profile'>
          <ProfileContainer>
            <h2 className='profile__title'>
              Здравствуйте,
              {' '}
              { username }
            </h2>

            {status === 'user' && <UserProfile />}

            {status === 'shelter_owner' && <ShelterOwnerProfile />}

          </ProfileContainer>
        </section>
      </main>
    </MainContainer>
  );
};

export default ProfilePage;
