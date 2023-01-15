import React from 'react';
import './NewsPage.css';
import NewsSection from '../../components/NewsSection/NewsSection';

const NewsPage = () => {
  return (
    <main className='main news'>
      <section className='news__title-row'>
        <h2 className='news__title'>Новости</h2>
        <button className='button' disabled={true}>Предложить новость</button>
      </section>
      <NewsSection />
    </main>
  );
}

export default NewsPage;
