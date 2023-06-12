import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PaperPage.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import paperApi from './api';

const PaperPage = () => {
  const { id } = useParams(); // id статьи, получаемый из url-адреса текущей страницы
  const [paper, setPaper] = useState({}); // информация о статье
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    paperApi
      .getPaperById(id) // загрузка статьи с указанным id
      .then((res) => {
        setPaper(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        throw new Error(err);
      });
  }, [id]);

  if (isLoading) {
    return <div className='main paper'>Loading...</div>;
  }

  const isPaperEmpty = Object.entries(paper).length === 0;

  const isDataNotFound = isPaperEmpty && !isLoading;

  if (isDataNotFound) {
    return navigate('/paper-not-found');
  }

  return (
    <MainContainer>
      <main className='main paper'>
        <h2 className='paper__title standard-font_type_h2'>{paper.header}</h2>
        <div className='paper__image-container'>
          <img className='paper__image' src={paper.profile_image} alt={paper.header} />
        </div>
        <p className='paper__text standard-font_type_body'>{paper.text}</p>
        <a className='paper__link standard-font_type_body' href={paper.source} target='_blank' rel='noreferrer'>
          Ссылка на источник
        </a>
      </main>
    </MainContainer>
  );
};

export default PaperPage;
