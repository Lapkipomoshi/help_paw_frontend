import React from 'react';
import { useNavigate } from "react-router-dom"; // подключает хук для программной навигации
import './NotFoundPage.css';
import errorImage from '../../images/error-404.svg';

const NotFoundPage = () => {
  const navigate = useNavigate(); // хук для использования программной навигации

  return (
    <main className='main not-found'>
      <img className='not-found__404' src={errorImage} alt='ошибка 404' />
      <p className='not-found__text'>Кажется, что то пошло не так :(</p>
      <p className='not-found__text'>Предлагаем вам вернуться на предыдущую страницу</p>
      <button className='button margin_column-center' type='button' onClick={() => navigate(-1)}>Вернуться назад</button>
    </main>
  );
};

export default NotFoundPage;
