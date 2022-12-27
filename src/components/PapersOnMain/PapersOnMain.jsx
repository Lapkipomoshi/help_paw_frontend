import React from 'react';
import { Link } from 'react-router-dom';
import './PapersOnMain.css';
import paperPhoto1 from '../../images/paper-card__photo_1.svg';
import paperPhoto2 from '../../images/paper-card__photo_2.svg';
import paperPhoto3 from '../../images/paper-card__photo_3.svg';

const PapersOnMain = () => {
  return (
    <section className='papers-on-main'>
      <h2 className='section-title'>Полезные статьи</h2>
      <ul className='papers-on-main__flex-container'>
        <li className='papers-on-main__flex-element'>
          <Link className='paper-card' to='/paper'>
            <img className='paper-card__image' src={paperPhoto1} alt='фото' />
            <p className='paper-card__text'>Животное из приюта: что надо знать перед тем, как взять его в дом?</p>
          </Link>
        </li>
        <li className='papers-on-main__flex-element'>
          <Link className='paper-card' to='/paper'>
            <img className='paper-card__image' src={paperPhoto2} alt='фото' />
            <p className='paper-card__text'>Как отучить собаку прыгать на вас при встрече</p>
          </Link>
        </li>
        <li className='papers-on-main__flex-element'>
          <Link className='paper-card' to='/paper'>
            <img className='paper-card__image' src={paperPhoto3} alt='фото' />
            <p className='paper-card__text'>Современные кинологи не применяют наказание. Почему?</p>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default PapersOnMain;
