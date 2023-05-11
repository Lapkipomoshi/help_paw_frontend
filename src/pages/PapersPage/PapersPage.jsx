import React, { useState, useEffect } from 'react';
import './PapersPage.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import PaperCard from '../../components/PaperCard/PaperCard';
import Button from '../../ui/Button/Button';
import papersApi from './api';

const PapersPage = () => {
  const [papersList, setPapersList] = useState([]); // список отображаемых карточек со статьями

  useEffect(() => {
    papersApi
      .getPapers(9) // загрузка статей
      .then((res) => {
        setPapersList(res.results);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <MainContainer>
      <main className='main papers'>
        <div className='papers__head-block'>
          <h1 className='papers__title'>Полезные статьи</h1>
          <Button className='margin-left_auto' to='/shelters' link>Хочу помогать</Button>
        </div>
        <ul className='papers__grid'>
          {papersList && papersList.length !== 0
            ? papersList.map((card) => {
              return (
                <li className='papers__grid-element' key={card.id}>
                  <PaperCard
                    id={card.id}
                    photo={card.profile_image}
                    title={card.header}
                  />
                </li>
              );
            })
            : <p>Не удалось загрузить статьи</p>}
        </ul>
        <Button className='margin_column-center'>Больше статей</Button>
      </main>
    </MainContainer>
  );
};

export default PapersPage;
