import React from 'react';
import './PapersPage.css';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../ui/Button/Button';
import PaperCard from '../../components/PaperCard/PaperCard';
import papersApi from './api';

const PapersPage = () => {
  const [papersList, setPapersList] = React.useState([]); // список отображаемых карточек со статьями

  React.useEffect(() => {
    papersApi
      .getPapers() // загрузка карточек с приютами на главной странице
      .then((papers) => {
        setPapersList(papers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainContainer theme='base'>
      <main className='main papers'>
        <div className='papers__head-block'>
          <h1 className='papers__title'>Полезные статьи</h1>
          <Button className='margin-left_auto' to='/shelters' link>Хочу помогать</Button>
        </div>
        <ul className='papers__grid'>
          {papersList.map((card) => {
            return (
              <li className='papers__grid-element' key={card.id}>
                <PaperCard
                  id={card.id}
                  photo={card.profile_image}
                  title={card.header}
                />
              </li>
            );
          })}
        </ul>
        <button className='button margin_column-center' type='button'>Больше статей</button>
      </main>
    </MainContainer>
  );
};

export default PapersPage;
