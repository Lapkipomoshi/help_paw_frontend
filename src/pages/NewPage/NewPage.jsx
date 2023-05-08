import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './NewPage.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import newApi from './api';
import dataIcon from '../../images/icons/ic_data_dark.svg';
import selfIcon from '../../images/icons/ic_self_dark.svg';

const NewPage = () => {
  const { id } = useParams(); // id новости, получаемый из url-адреса текущей страницы
  const [newInfo, setNewInfo] = useState({}); // данные о новости

  useEffect(() => {
    newApi
      .getNewById(id) // загрузка статьи с указанным id
      .then((res) => {
        setNewInfo(res);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [id]);

  return (
    <MainContainer>
      <main className='main new-page'>
        <h2 className='new-page__title'>{newInfo && newInfo.header ? newInfo.header : 'Новость не найдена'}</h2>
        <div className='new-page__row'>
          <div className='new-page__info-block'>
            <img className='new-page__icon' src={dataIcon} alt='дата' />
            <p className='new-page__info'>{newInfo.pub_date}</p>
          </div>
          <Link className='new-page__info-block new-page__info-block_link' to={`/shelters/${newInfo.shelter}/news`}>
            <img className='new-page__icon' src={selfIcon} alt='приют' />
            <p className='new-page__info'>{newInfo.shelter}</p>
          </Link>
        </div>
        <div className='new-page__photos'>
          <img className='new-page__main-photo' src={newInfo.profile_image} alt='главное фото' />
          <div className='new-page__photo-column'>
            <img className='new-page__additional-photo' src={newInfo.image_1} alt='фото 1' />
            <img className='new-page__additional-photo' src={newInfo.image_2} alt='фото 2' />
            <img className='new-page__additional-photo' src={newInfo.image_3} alt='фото 3' />
          </div>
        </div>
        <p className='new-page__text'>{newInfo.text}</p>
      </main>
    </MainContainer>
  );
};

export default NewPage;
