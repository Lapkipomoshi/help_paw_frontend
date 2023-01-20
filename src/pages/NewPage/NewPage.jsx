import React from 'react';
import { Link } from 'react-router-dom';
import './NewPage.css';
import dataIcon from '../../images/icons/ic_data_dark.svg';
import selfIcon from '../../images/icons/ic_self_dark.svg';
import newPagePhoto from '../../images/new-page_photo.jpg';

const NewPage = () => {
  return (
    <main className='main new-page'>
      <h2 className='new-page__title'>В приюте Бирюлево побывали школьники</h2>
      <div className='new-page__row'>
        <div className='new-page__info-block'>
          <img className='new-page__icon' src={dataIcon} alt='дата' />
          <p className='new-page__info'>12.12.2022</p>
        </div>
        <Link className='new-page__info-block new-page__info-block_link' to='/shelters/1'>
          <img className='new-page__icon' src={selfIcon} alt='приют' />
          <p className='new-page__info'>Приют Бирюлево</p>
        </Link>
      </div>
      <div className='new-page__photos'>
        <img className='new-page__main-photo' src={newPagePhoto} alt='главное фото' />
        <div className='new-page__photo-column'>
          <img className='new-page__additional-photo' src={newPagePhoto} alt='фото' />
          <img className='new-page__additional-photo' src={newPagePhoto} alt='фото' />
          <img className='new-page__additional-photo' src={newPagePhoto} alt='фото' />
        </div>
      </div>
      <p className='new-page__text'>Выражаем большую благодарность ученикам 4 "Е" класса московской школы №2010 за подарки для наших подопечных! 
      А также благодарим преподавательницу Людмилу и её супруга Александра за организацию транспортировки помощи в приют.</p>
      <p className='new-page__text'>Ребята подарили нашим подопечным лакомства и корм. Собачки и кошечки остались довольны!</p>
    </main>
  );
}

export default NewPage;
