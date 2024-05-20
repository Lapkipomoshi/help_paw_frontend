import React from 'react';
import { useOutletContext, useParams, Link } from 'react-router-dom';
import './ShelterNews.scss';
import NewsSection from '../NewsSection/NewsSection';
import { Button } from '../../ui';

const ShelterNews = () => {
  const { id } = useParams();
  const { isOwner } = useOutletContext();

  return (
    <section className='shelter-section shelter-news'>
      <div className='shelter-section-top'>
        <h2 className='shelter-section__title shelter-news__title'>Новости приюта</h2>
        <Link
          to='/my-shelter/add-news'
          className='shelter-section__btn-news'
        >
          <Button disabled={!isOwner}>Предложить новость</Button>
        </Link>
      </div>
      <NewsSection shelterId={id} />
      <Button className='shelter-section__btn-more' theme='transparent'>Больше новостей</Button>
    </section>
  );
};

export default ShelterNews;
