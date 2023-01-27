import React from 'react';
import './NewsPage.css';
import NewsSection from '../../components/NewsSection/NewsSection';

const NewsPage = () => {
  return (
    <main className='main news'>
      <div className='news__title-row'>
        <h2 className='news__title'>Новости</h2>
        <button className='button' type='button' disabled>Предложить новость</button>
      </div>
      <NewsSection />
    </main>
  );
};

export default NewsPage;
