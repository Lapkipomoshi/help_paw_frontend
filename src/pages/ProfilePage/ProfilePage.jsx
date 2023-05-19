import React, { useContext } from 'react';
import './ProfilePage.css';
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer';
import ShelterCard from '../../components/ShelterCard/ShelterCard';
import MainContainer from '../../components/MainContainer/MainContainer';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const ProfilePage = () => {
  const currentUser = useContext(CurrentUserContext);
  const { username } = currentUser;

  return (
    <MainContainer>
      <main className='main'>
        <section className='profile'>
          <ProfileContainer>
            <h2 className='profile__title'>
              Здравствуйте,
              {' '}
              { username }
              !
            </h2>
            <p className='profile__subtitle'>Приюты, которым Вы помогли</p>

            <div className='profile__shelters'>
              <ShelterCard />
              <ShelterCard />
              <ShelterCard />
            </div>
          </ProfileContainer>
        </section>
      </main>
    </MainContainer>
  );
};

export default ProfilePage;
