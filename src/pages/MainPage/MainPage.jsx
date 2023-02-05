/* eslint-disable no-unused-vars */
import React from 'react';
import './MainPage.css';
import Banner from '../../modules/Banner/Banner';
import Promo from '../../modules/Promo/Promo';
import SheltersOnMain from '../../modules/SheltersOnMain/SheltersOnMain';
import PapersOnMain from '../../modules/PapersOnMain/PapersOnMain';
import Faq from '../../modules/Faq/Faq';
import mainApi from './api';

const MainPage = ({ loggedIn }) => {
  const [faqList, setFaqList] = React.useState([]); // список часто задаваемых вопросов

  React.useEffect(() => {
    fetch('https://lapkipomoshi.ru/api/v1/faq/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((faqs) => {
        console.log(faqs);
        setFaqList(faqs);
      })
      .catch((err) => {
        console.log(err);
      });

    /*    mainApi
      .getFaq()
      .then((faqs) => {
        console.log(faqs);
        setFaqList(faqs);
      })
      .catch((err) => {
        console.log(err);
      }); */
  }, []);

  return (
    <main className='main'>
      <Banner />
      <Promo />
      <SheltersOnMain loggedIn={loggedIn} />
      <PapersOnMain />
      <Faq faqList={faqList} />
    </main>
  );
};

export default MainPage;
