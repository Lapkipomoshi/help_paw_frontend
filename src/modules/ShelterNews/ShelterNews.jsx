import React from 'react';
import './ShelterNews.css';
import NewsSection from '../NewsSection/NewsSection';

const ShelterNews = () => {
  return (
    <section className='shelter-section'>
      <h2 className='shelter-section__title shelter-news-title'>Новости приюта</h2>
      <NewsSection />
    </section>
  );
};

export default ShelterNews;
