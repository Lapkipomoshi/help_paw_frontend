import React from 'react';
import { useParams } from 'react-router-dom';
import './ShelterNews.scss';
import NewsSection from '../NewsSection/NewsSection';
import { Button } from '../../ui';

const ShelterNews = () => {
  const { id } = useParams();

  return (
    <section className='shelter-section shelter-news'>
      <div className='shelter-section-top'>
        <h2 className='shelter-section__title shelter-news__title'>Новости приюта</h2>
        <Button className='shelter-section__btn-news' disabled>Предложить новость</Button>
      </div>
      <NewsSection shelterId={id} />
      <Button className='shelter-section__btn-more' theme='transparent'>Больше новостей</Button>
    </section>
  );
};

export default ShelterNews;
