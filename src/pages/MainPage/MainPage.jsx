import React from 'react';
import './MainPage.css';
import Banner from '../../modules/Banner/Banner';
import Promo from '../../modules/Promo/Promo';
import SheltersOnMain from '../../modules/SheltersOnMain/SheltersOnMain';
import PapersOnMain from '../../modules/PapersOnMain/PapersOnMain';
import Faq from '../../modules/Faq/Faq';

const MainPage = ({ loggedIn }) => {
  return (
    <main className='main'>
      <Banner />
      <Promo />
      <SheltersOnMain loggedIn={loggedIn} />
      <PapersOnMain />
      <Faq />
    </main>
  );
};

export default MainPage;
