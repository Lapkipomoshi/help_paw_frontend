import React from 'react';
import './PapersOnMain.css';
import PaperCard from '../../components/PaperCard/PaperCard';
import Button from '../../ui/Button/Button';
import MainContainer from '../../components/MainContainer/MainContainer';

const PapersOnMain = ({ papersList }) => {
  return (
    <MainContainer theme='additional'>
      <section className='papers-on-main'>
        <h2 className='section-title standard-font standard-font_type_h2'>Полезные статьи</h2>
        <ul className='papers-on-main__flex-container'>
          {papersList && papersList.length !== 0
            ? papersList.map((card) => {
              return (
                <li className='papers-on-main__flex-element' key={card.id}>
                  <PaperCard
                    id={card.id}
                    title={card.header}
                    photo={card.profile_image}
                  />
                </li>
              );
            })
            : <p>Не удалось загрузить статьи</p>}
        </ul>
        <Button className='papers-on-main__button' to='/papers' link>Все статьи</Button>
      </section>
    </MainContainer>
  );
};

export default PapersOnMain;
