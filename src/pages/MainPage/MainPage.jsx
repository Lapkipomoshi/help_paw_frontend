import React from 'react';
import './MainPage.css';
import Banner from '../../modules/Banner/Banner';
import Promo from '../../modules/Promo/Promo';
import SheltersOnMain from '../../modules/SheltersOnMain/SheltersOnMain';
import PapersOnMain from '../../modules/PapersOnMain/PapersOnMain';
import FAQ from '../../modules/FAQ/FAQ';

const MainPage = ({ loggedIn }) => {
  return (
    <main className='main'>
      <Banner />
      <Promo />
      <SheltersOnMain loggedIn={loggedIn} />
      <PapersOnMain />
      <FAQ />
    </main>
  );
};

export default MainPage;
