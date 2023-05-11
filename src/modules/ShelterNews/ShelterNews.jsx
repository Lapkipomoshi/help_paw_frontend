import React from 'react';
import { useParams } from 'react-router-dom';
import './ShelterNews.scss';
import NewsSection from '../NewsSection/NewsSection';

const ShelterNews = () => {
  const { id } = useParams();

  return (
    <section className='shelter-section shelter-news'>
      <h2 className='shelter-section__title shelter-news__title'>Новости приюта</h2>
      <NewsSection shelterId={id} />
    </section>
  );
};

export default ShelterNews;
