import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import './PapersPage.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../ui/Button/Button';
import papersApi from './api';
import PapersContent from '../../components/PapersContent/PapersContent';

const PapersPage = () => {
  const [papersList, setPapersList] = useState([]); // список отображаемых карточек со статьями
  const [hasMorePapers, setHasMorePapers] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const papersAmountByBreakpoint = { mobile: 2, tablet: 4, desktop: 8 };

  const isMobile = useMediaQuery({
    maxWidth: 767,
  });

  const isTablet = useMediaQuery({
    maxWidth: 1439,
    minWidth: 768,
  });

  const getPapersAmount = () => {
    if (isMobile) {
      return papersAmountByBreakpoint.mobile;
    }
    if (isTablet) {
      return papersAmountByBreakpoint.tablet;
    }
    return papersAmountByBreakpoint.desktop;
  };

  const papersAmount = getPapersAmount();

  const fetchPapers = () => {
    if (isLoading) return;

    setIsLoading(true);
    setIsError(false);

    papersApi
      .getPapers(papersAmount, papersList.length)
      .then((res) => {
        setPapersList([...papersList, ...res.results]);
        setHasMorePapers(Boolean(res.next));
      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {
        setIsLoading(false);
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
          <Button className='papers__offer-button' to='/shelters' link>
            Хочу помогать
          </Button>
        </div>
        <PapersContent isLoading={isLoading} isError={isError} papersList={papersList} />
        {hasMorePapers && (
          <Button className='papers__load-more-button' onClick={handleClick}>
            Больше статей
          </Button>
        )}
      </main>
    </MainContainer>
  );
};

export default PapersPage;
