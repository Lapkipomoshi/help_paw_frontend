import React, { useState, useEffect, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import './PapersPage.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import PaperCard from '../../components/PaperCard/PaperCard';
import Button from '../../ui/Button/Button';
import papersApi from './api';

const PapersAmountByBreakpoint = { mobile: 2, tablet: 4, desktop: 8 };

const PapersPage = () => {
  const [papersList, setPapersList] = useState([]); // список отображаемых карточек со статьями
  const [hasMorePapers, setHasMorePapers] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: 767,
  });

  const isTablet = useMediaQuery({
    maxWidth: 1439,
    minWidth: 768,
  });

  const isDesktop = useMediaQuery({
    minWidth: 1440,
  });

  const papersAmount = useMemo(() => {
    switch (true) {
    case isMobile:
      return PapersAmountByBreakpoint.mobile;
    case isTablet:
      return PapersAmountByBreakpoint.tablet;
    default:
      return PapersAmountByBreakpoint.desktop;
    }
  }, [isMobile, isTablet, isDesktop]);

  const fetchPapers = () => {
    papersApi
      .getPapers(papersAmount, papersList.length)
      .then((res) => {
        setPapersList([...papersList, ...res.results]);
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
          <h1 className='papers__title standart-font_type_h2'>Полезные статьи</h1>
          <Button className='margin-left_auto papers__offer-button' to='/shelters' link>
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
        {hasMorePapers && (
          <Button
            className='papers__load-more-button'
            onClick={handleClick}
          >
            Больше статей
          </Button>
        )}
      </main>
    </MainContainer>
  );
};

export default PapersPage;
