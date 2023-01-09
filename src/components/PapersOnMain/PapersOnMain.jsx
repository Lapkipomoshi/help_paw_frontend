import React from 'react';
import './PapersOnMain.css';
import PaperCard from '../PaperCard/PaperCard';
import paperPhoto1 from '../../images/paper-card__photo_1.jpg';
import paperPhoto2 from '../../images/paper-card__photo_2.jpg';
import paperPhoto3 from '../../images/paper-card__photo_3.jpg';

const PapersOnMain = () => {
  return (
    <section className='papers-on-main'>
      <h2 className='section-title'>Полезные статьи</h2>
      <ul className='papers-on-main__flex-container'>
        <li className='papers-on-main__flex-element'>
          <PaperCard photo={paperPhoto1} />
        </li>
        <li className='papers-on-main__flex-element'>
          <PaperCard photo={paperPhoto2} />
        </li>
        <li className='papers-on-main__flex-element'>
          <PaperCard photo={paperPhoto3} />
        </li>
      </ul>
    </section>
  );
}

export default PapersOnMain;
