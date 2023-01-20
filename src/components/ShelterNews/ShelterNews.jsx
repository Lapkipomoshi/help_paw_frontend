import React from 'react';
import NewsSection from '../NewsSection/NewsSection';
import './ShelterNews.css';

const ShelterNews = () => {
  return (
    <section className='shelter-section'>
      <h2 className='shelter-section__title shelter-news-title'>Новости приюта</h2>
      <NewsSection />
    </section>
  );
}

export default ShelterNews;
