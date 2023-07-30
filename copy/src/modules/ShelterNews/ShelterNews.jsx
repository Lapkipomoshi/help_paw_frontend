import React from 'react';
import { useParams } from 'react-router-dom';
import './ShelterNews.scss';
import NewsSection from '../NewsSection/NewsSection';
import Button from '../../ui/Button/Button';

const ShelterNews = () => {
  const { id } = useParams();

  return (
    <section className='shelter-section shelter-news'>
      <h2 className='shelter-section__title shelter-news__title'>Новости приюта</h2>
      <NewsSection shelterId={id} />
      <Button className='button_theme_transparent' onClick={() => {}}>Больше новостей</Button>
    </section>
  );
};

export default ShelterNews;
