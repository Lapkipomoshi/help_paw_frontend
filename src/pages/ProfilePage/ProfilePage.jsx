import React from 'react';
import './ProfilePage.css';
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer';
import ShelterCard from '../../components/ShelterCard/ShelterCard';

const ProfilePage = () => {
  return (
    <main className='main main_background'>
      <section className='profile'>
        <ProfileContainer>
          <h2 className='profile__title'>Здравствуйте, Александр!</h2>
          <p className='profile__subtitle'>Приюты, которым Вы помогли</p>

          <div className='profile__shelters'>
            <ShelterCard />
            <ShelterCard />
            <ShelterCard />
          </div>
        </ProfileContainer>
      </section>
    </main>
  );
};

export default ProfilePage;
