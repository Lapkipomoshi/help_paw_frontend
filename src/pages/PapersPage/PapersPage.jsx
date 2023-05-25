import React, { useState, useEffect } from 'react';
import './PapersPage.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import PaperCard from '../../components/PaperCard/PaperCard';
import Button from '../../ui/Button/Button';
import papersApi from './api';

const PAPERS_PER_PAGE = 1;

const PapersPage = () => {
  const [papersList, setPapersList] = useState([]); // список отображаемых карточек со статьями
  const [papersPage, setPapersPage] = useState(0); // текущая загруженная страница статей
  const [hasMorePapers, setHasMorePapers] = useState(false);

  const fetchPapers = () => {
    papersApi
      .getPapers(PAPERS_PER_PAGE, papersPage * PAPERS_PER_PAGE) // загрузка статей
      .then((res) => {
        setPapersList((prev) => { return [...prev, ...res.results]; });
        setPapersPage(papersPage + 1);

        setHasMorePapers(Boolean(res.next));
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const handleClick = () => {
    fetchPapers();
  };

  useEffect(() => {
    fetchPapers();
  }, []);

  return (
    <MainContainer>
      <main className='main papers'>
        <div className='papers__head-block'>
          <h1 className='papers__title'>Полезные статьи</h1>
          <Button className='margin-left_auto button--mobile-hidden' to='/shelters' link>
            Хочу помогать
          </Button>
        </div>
        <ul className='papers__grid'>
          {papersList && papersList.length !== 0 ? (
            papersList.map((card) => {
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
          ) : (
            <p>Не удалось загрузить статьи</p>
          )}
        </ul>
        <Button
          className='button--full-width'
          disabled={!hasMorePapers}
          onClick={handleClick}
        >
          Больше статей
        </Button>
      </main>
    </MainContainer>
  );
};

export default PapersPage;
