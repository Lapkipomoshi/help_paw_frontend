import React from 'react';
import './NotFoundPage.css';
import Button from '../../ui/Button/Button';
import errorImage from '../../images/error-404.svg';

const NotFoundPage = () => {
  return (
    <main className='main not-found'>
      <img className='not-found__404' src={errorImage} alt='ошибка 404' />
      <p className='not-found__text'>Кажется, что то пошло не так :(</p>
      <p className='not-found__text'>Предлагаем вам вернуться на предыдущую страницу</p>
      <Button to={-1} link>Вернуться назад</Button>
    </main>
  );
};

export default NotFoundPage;
