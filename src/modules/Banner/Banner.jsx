import React from 'react';
import './Banner.css';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../ui/Button/Button';
import bannerImage from '../../images/main__banner.png';

const Banner = () => {
  return (
    <MainContainer>
      <section className='banner'>
        <img className='banner__image' src={bannerImage} alt='питомцы' />
        <h1 className='banner__title'>Помогаем тем, кто в этом нуждается</h1>
        <div className='banner__line' />
        <p className='banner__subtitle'>Лапки помощи - это проект помощи приютам для животных.</p>
        <Button className='banner__button' to='/shelters' link>Хочу помогать</Button>
      </section>
    </MainContainer>
  );
};

export default Banner;
