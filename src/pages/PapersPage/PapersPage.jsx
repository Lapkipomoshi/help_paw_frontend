import React from 'react';
import { Link } from 'react-router-dom';
import './PapersPage.css';
import paperPhoto1 from '../../images/paper-card__photo_1.jpg';
import paperPhoto2 from '../../images/paper-card__photo_2.jpg';
import paperPhoto3 from '../../images/paper-card__photo_3.jpg';

const PapersPage = () => {
  return (
    <main className='main papers'>
      <div className='papers__head-block'>
        <h1 className='papers__title'>Полезные статьи</h1>
        <button className='button'>Хочу помогать</button>
      </div>
      <ul className='papers__grid'>
        <li className='papers__grid-element'>
          <Link className='paper-card' to='/paper'>
            <img className='paper-card__image' src={paperPhoto1} alt='фото' />
            <p className='paper-card__text'>Животное из приюта: что надо знать перед тем, как взять его в дом?</p>
          </Link>
        </li>
        <li className='papers__grid-element'>
          <Link className='paper-card' to='/paper'>
            <img className='paper-card__image' src={paperPhoto2} alt='фото' />
            <p className='paper-card__text'>Как отучить собаку прыгать на вас при встрече</p>
          </Link>
        </li>
        <li className='papers__grid-element'>
          <Link className='paper-card' to='/paper'>
            <img className='paper-card__image' src={paperPhoto3} alt='фото' />
            <p className='paper-card__text'>Современные кинологи не применяют наказание. Почему?</p>
          </Link>
        </li>
        <li className='papers__grid-element'>
          <Link className='paper-card' to='/paper'>
            <img className='paper-card__image' src={paperPhoto1} alt='фото' />
            <p className='paper-card__text'>Животное из приюта: что надо знать перед тем, как взять его в дом?</p>
          </Link>
        </li>
        <li className='papers__grid-element'>
          <Link className='paper-card' to='/paper'>
            <img className='paper-card__image' src={paperPhoto2} alt='фото' />
            <p className='paper-card__text'>Как отучить собаку прыгать на вас при встрече</p>
          </Link>
        </li>
        <li className='papers__grid-element'>
          <Link className='paper-card' to='/paper'>
            <img className='paper-card__image' src={paperPhoto3} alt='фото' />
            <p className='paper-card__text'>Современные кинологи не применяют наказание. Почему?</p>
          </Link>
        </li>
        <li className='papers__grid-element'>
          <Link className='paper-card' to='/paper'>
            <img className='paper-card__image' src={paperPhoto1} alt='фото' />
            <p className='paper-card__text'>Животное из приюта: что надо знать перед тем, как взять его в дом?</p>
          </Link>
        </li>
        <li className='papers__grid-element'>
          <Link className='paper-card' to='/paper'>
            <img className='paper-card__image' src={paperPhoto2} alt='фото' />
            <p className='paper-card__text'>Как отучить собаку прыгать на вас при встрече</p>
          </Link>
        </li>
        <li className='papers__grid-element'>
          <Link className='paper-card' to='/paper'>
            <img className='paper-card__image' src={paperPhoto3} alt='фото' />
            <p className='paper-card__text'>Современные кинологи не применяют наказание. Почему?</p>
          </Link>
        </li>
      </ul>
    </main>
  );
}

export default PapersPage;
