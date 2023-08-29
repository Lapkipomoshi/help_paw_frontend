import React, { useState, useEffect, useContext } from 'react';
import './MainPage.scss';
import Banner from '../../modules/Banner/Banner';
import Promo from '../../modules/Promo/Promo';
import SheltersOnMain from '../../modules/SheltersOnMain/SheltersOnMain';
import PapersOnMain from '../../modules/PapersOnMain/PapersOnMain';
import Faq from '../../modules/Faq/Faq';
import AppContext from '../../contexts/App';
import mainApi from './api';

const MainPage = () => {
  const app = useContext(AppContext);
  const [sheltersList, setSheltersList] = useState([]); // список приютов на главной странице
  const [papersList, setPapersList] = useState([]); // список полезных статей на главной странице
  const [faqList, setFaqList] = useState([]); // список часто задаваемых вопросов

  const setSheltersByApi = () => {
    mainApi
      .getSheltersOnMain(3) // загрузка карточек с приютами на главной странице
      .then((res) => {
        const shelters = res.results;
        setSheltersList(shelters);
        app.sheltersOnMain = shelters;
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const setPapersByApi = () => {
    mainApi
      .getPapersOnMain(3) // загрузка карточек с полезными статьями на главной странице
      .then((res) => {
        const papers = res.results;
        setPapersList(papers);
        app.papersOnMain = papers;
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const setFaqByApi = () => {
    mainApi
      .getFaq(4) // загрузка карточек с часто задаваемыми вопросами
      .then((res) => {
        const faqs = res.results;
        setFaqList(faqs);
        app.faqsOnMain = faqs;
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  useEffect(() => {
    app.sheltersOnMain ? setSheltersList(app.sheltersOnMain) : setSheltersByApi();
    app.papersOnMain ? setPapersList(app.papersOnMain) : setPapersByApi();
    app.faqsOnMain ? setFaqList(app.faqsOnMain) : setFaqByApi();
  }, []);

  return (
    <main className='main'>
      <Banner />
      <Promo />
      <SheltersOnMain sheltersList={sheltersList} />
      <PapersOnMain papersList={papersList} />
      <Faq faqList={faqList} />
    </main>
  );
};

export default MainPage;
