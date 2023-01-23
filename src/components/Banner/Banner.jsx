import React from 'react';
import { useNavigate } from "react-router-dom";
import './Banner.css';
import bannerImage from '../../images/main__banner.png';
import Button from '../Button/Button';

const Banner = () => {
  const navigate = useNavigate(); // хук для использования программной навигации

  return (
    <section className='banner'>
      <img className='banner__image' src={bannerImage} alt='питомцы' />
      <h1 className='banner__title'>Помогаем тем, кто в этом нуждается</h1>
      <div className='banner__line'></div>
      <p className='banner__subtitle'>Лапки помощи - это проект помощи приютам для животных.</p>
      <Button className='primary banner__button' onClick={() => navigate('/shelters')}>Хочу помогать</Button>
    </section>
  );
}

export default Banner;
