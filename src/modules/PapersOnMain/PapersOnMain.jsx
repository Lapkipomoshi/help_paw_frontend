import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PapersOnMain.css';
import PaperCard from '../../components/PaperCard/PaperCard';
import paperPhoto1 from '../../images/paper-card__photo_1.jpg';
import paperPhoto2 from '../../images/paper-card__photo_2.jpg';
import paperPhoto3 from '../../images/paper-card__photo_3.jpg';

const PapersOnMain = () => {
  const navigate = useNavigate();

  return (
    <section className='papers-on-main'>
      <h2 className='section-title'>Полезные статьи</h2>
      <ul className='papers-on-main__flex-container'>
        <li className='papers-on-main__flex-element'>
          <PaperCard
            id='1'
            photo={paperPhoto1}
            title='Животное из приюта: что надо знать перед тем, как взять его в дом?'
          />
        </li>
        <li className='papers-on-main__flex-element'>
          <PaperCard
            id='2'
            photo={paperPhoto2}
            title='Как отучить собаку прыгать на вас при встрече'
          />
        </li>
        <li className='papers-on-main__flex-element'>
          <PaperCard
            id='3'
            photo={paperPhoto3}
            title='Современные кинологи не применяют наказание. Почему?'
          />
        </li>
      </ul>
      <button className='button margin-left_auto' type='button' onClick={() => { return navigate('/papers'); }}>
        Все статьи
      </button>
    </section>
  );
};

export default PapersOnMain;
