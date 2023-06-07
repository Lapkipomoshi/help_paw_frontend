import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PaperPage.scss';
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
        <h2 className='paper__title standart-font_type_h2'>{paper.header}</h2>
        <div className='paper__image-container'>
          <img className='paper__image' src={paper.profile_image} alt={paper.header} />
        </div>
        <p className='paper__text standart-font_type_body'>{paper.text}</p>
        <a className='paper__link standart-font_type_body' href={paper.source} target='_blank' rel='noreferrer'>
          Ссылка на источник
        </a>
      </main>
    </MainContainer>
  );
};

export default PaperPage;
