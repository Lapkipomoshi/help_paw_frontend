import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import './PapersPage.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../ui/Button/Button';
import papersApi from './api';
import PapersContent from '../../components/PapersContent/PapersContent';

const initialPapersAmountByBreakpoint = { mobile: 3, tablet: 6, desktop: 9 };
const papersAmount = 3;

const PapersPage = () => {
  const [papersList, setPapersList] = useState([]); // список отображаемых карточек со статьями
  const [hasMorePapers, setHasMorePapers] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: 767,
  });

  const isTablet = useMediaQuery({
    maxWidth: 1439,
    minWidth: 768,
  });

  const getPapersAmount = () => {
    if (isMobile) {
      return initialPapersAmountByBreakpoint.mobile;
    }
    if (isTablet) {
      return initialPapersAmountByBreakpoint.tablet;
    }
    return initialPapersAmountByBreakpoint.desktop;
  };

  const initialPapersAmount = getPapersAmount();

  const fetchPapers = () => {
    if (isLoading) return;

    setIsLoading(true);
    setIsError(false);

    const amount = papersList.length === 0 ? initialPapersAmount : papersAmount;

    papersApi
      .getPapers(amount, papersList.length)
      .then((res) => {
        setPapersList([...papersList, ...res.results]);
        setHasMorePapers(Boolean(res.next));
      })
      .catch((err) => {
        setIsError(true);
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
