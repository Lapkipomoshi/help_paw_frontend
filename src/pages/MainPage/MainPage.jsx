import React, { useState, useEffect } from 'react';
import './MainPage.css';
import Banner from '../../modules/Banner/Banner';
import Promo from '../../modules/Promo/Promo';
import SheltersOnMain from '../../modules/SheltersOnMain/SheltersOnMain';
import PapersOnMain from '../../modules/PapersOnMain/PapersOnMain';
import Faq from '../../modules/Faq/Faq';
import mainApi from './api';

const MainPage = ({ loggedIn }) => {
  const [sheltersList, setSheltersList] = useState([]); // список приютов на главной странице
  const [papersList, setPapersList] = useState([]); // список полезных статей на главной странице
  const [faqList, setFaqList] = useState([]); // список часто задаваемых вопросов

  useEffect(() => {
    mainApi
      .getSheltersOnMain(3) // загрузка карточек с приютами на главной странице
      .then((shelters) => {
        setSheltersList(shelters.results);
      })
      .catch((err) => {
        throw new Error(err);
      });

    mainApi
      .getPapersOnMain(3) // загрузка карточек с полезными статьями на главной странице
      .then((papers) => {
        setPapersList(papers.results);
      })
      .catch((err) => {
        throw new Error(err);
      });

    mainApi
      .getFaq(4) // загрузка карточек с часто задаваемыми вопросами
      .then((faqs) => {
        setFaqList(faqs.results);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <main className='main'>
      <Banner />
      <Promo />
      <SheltersOnMain loggedIn={loggedIn} sheltersList={sheltersList} />
      <PapersOnMain papersList={papersList} />
      <Faq faqList={faqList} />
    </main>
  );
};

export default MainPage;
