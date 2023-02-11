import React from 'react';
import { useParams } from 'react-router-dom';
import './PaperPage.css';
import paperApi from './api';

const PaperPage = () => {
  const { id } = useParams(); // id статьи, получаемый из url-адреса текущей страницы
  const [paper, setPaper] = React.useState({}); // информация о статье

  React.useEffect(() => {
    paperApi
      .getPaper(id) // загрузка карточек с приютами на главной странице
      .then((res) => {
        setPaper(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <main className='main paper'>
      <h1 className='paper__title'>{paper.header}</h1>
      <img className='paper__image' src={paper.profile_image} alt='фото' />
      <p className='paper__text'>{paper.text}</p>
      <a className='paper__link' href={paper.source} target='_blank' rel='noreferrer'>Ссылка на источник</a>
    </main>
  );
};

export default PaperPage;
