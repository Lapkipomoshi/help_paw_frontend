import React, { useState, useEffect, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import './PapersPage.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import PapersContent from '../../components/PapersContent/PapersContent';
import Button from '../../ui/Button/Button';
import AppContext from '../../contexts/App';
import papersApi from './api';

const initialPapersAmountByBreakpoint = { mobile: 3, tablet: 6, desktop: 9 };
const additionalPapersAmount = 3;

const PapersPage = () => {
  const app = useContext(AppContext);
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

  const setPapersByApi = (amount, currentLength) => {
    papersApi
      .getPapers(amount, currentLength)
      .then((res) => {
        const resPapers = res.results;
        setPapersList([...papersList, ...resPapers]);
        app.portalPapers = [...papersList, ...resPapers];

        const resNest = Boolean(res.next);
        setHasMorePapers(resNest);
        app.hasMorePortalPapers = resNest;
      })
      .catch((err) => {
        setIsError(true);
        throw new Error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchPapers = () => {
    if (isLoading) return;
    const amount = papersList.length === 0 ? getPapersAmount() : additionalPapersAmount;

    setIsLoading(true);
    setIsError(false);
    setPapersByApi(amount, papersList.length);
  };

  useEffect(() => {
    if (app.portalPapers) {
      setPapersList(app.portalPapers);
      setHasMorePapers(app.hasMorePortalPapers);
    } else {
      fetchPapers();
    }
  }, []);

  return (
    <MainContainer>
      <main className='main papers'>
        <div className='papers__head-block'>
          <h2 className='papers__title standard-font_type_h2'>Полезные статьи</h2>
          <Button className='papers__offer-button' to='/shelters' link>
            Хочу помогать
          </Button>
        </div>
        <PapersContent isLoading={isLoading} isError={isError} papersList={papersList} />
        {hasMorePapers && (
          <Button className='papers__load-more-button' onClick={fetchPapers} disabled={isLoading}>
            Больше статей
          </Button>
        )}
      </main>
    </MainContainer>
  );
};

export default PapersPage;
