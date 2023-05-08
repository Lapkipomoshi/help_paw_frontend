import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PaperPage.css';
import MainContainer from '../../components/MainContainer/MainContainer';
import paperApi from './api';

const PaperPage = () => {
  const { id } = useParams(); // id статьи, получаемый из url-адреса текущей страницы
  const [paper, setPaper] = useState({}); // информация о статье

  useEffect(() => {
    paperApi
      .getPaperById(id) // загрузка статьи с указанным id
      .then((res) => {
        setPaper(res);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [id]);

  return (
    <MainContainer>
      <main className='main paper'>
        <h1 className='paper__title'>{paper.header}</h1>
        <img className='paper__image' src={paper.profile_image} alt='фото' />
        <p className='paper__text'>{paper.text}</p>
        <a className='paper__link' href={paper.source} target='_blank' rel='noreferrer'>Ссылка на источник</a>
      </main>
    </MainContainer>
  );
};

export default PaperPage;
