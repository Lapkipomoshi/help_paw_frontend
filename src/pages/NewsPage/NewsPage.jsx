import React, { useState, useEffect } from 'react';
import './NewsPage.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import NewsSection from '../../components/NewsSection/NewsSection';
import Button from '../../ui/Button/Button';
import newsApi from './api';

const NewsPage = () => {
  const [newsList, setNewsList] = useState([]); // список новостей

  useEffect(() => {
    newsApi
      .getNews(4) // загрузка статей
      .then((res) => {
        setNewsList(res.results);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <MainContainer>
      <main className='main news'>
        <div className='news__title-row'>
          <h2 className='news__title'>Новости</h2>
          <Button className='margin-left_auto' onClick={() => {}} disabled>Предложить новость</Button>
        </div>
        <NewsSection newsList={newsList} />
      </main>
    </MainContainer>
  );
};

export default NewsPage;
