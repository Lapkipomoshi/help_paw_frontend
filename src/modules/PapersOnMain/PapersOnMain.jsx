import React from 'react';
import './PapersOnMain.css';
import PaperCard from '../../components/PaperCard/PaperCard';
import Button from '../../ui/Button/Button';

const PapersOnMain = ({ papersList }) => {
  return (
    <section className='papers-on-main'>
      <h2 className='section-title'>Полезные статьи</h2>
      <ul className='papers-on-main__flex-container'>
        {papersList.map((card) => {
          return (
            <li className='papers-on-main__flex-element' key={card.id}>
              <PaperCard
                id={card.id}
                title={card.header}
                photo={card.profile_image}
              />
            </li>
          );
        })}
      </ul>
      <Button className='margin-left_auto' to='/papers' link>Все статьи</Button>
    </section>
  );
};

export default PapersOnMain;
