import React from 'react';
import './Banner.css';
import bannerImage from '../../images/main__banner.svg';

const Banner = () => {
  return (
    <section className='banner'>
      <img className='banner__image' src={bannerImage} alt='питомцы' />
      <h1 className='banner__title'>Помогаем тем, кто в этом нуждается</h1>
      <div className='banner__line'></div>
      <p className='banner__subtitle'>Лапки помощи - это проект помощи приютам для животных.</p>
      <button className='banner__button button'>Хочу помогать</button>
    </section>
  );
}

export default Banner;
