import React from 'react';
import './Banner.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../ui/Button/Button';
import bannerImage from '../../images/main__banner.png';

const Banner = () => {
  return (
    <MainContainer>
      <section className='banner section'>
        <h1 className='banner__title standart-font standart-font_type_h1'>Помогаем тем, кто в этом нуждается</h1>
        <div className='banner__line' />
        <p className='banner__subtitle standart-font standart-font_type_h3'>Лапки помощи - это проект помощи приютам для животных.</p>
        <img className='banner__image' src={bannerImage} alt='Питомцы' />
        <Button to='/shelters' link>Хочу помогать</Button>
      </section>
    </MainContainer>
  );
};

export default Banner;
