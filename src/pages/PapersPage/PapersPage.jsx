import React from 'react';
import { useNavigate } from "react-router-dom";
import './PapersPage.css';
import PaperCard from '../../components/PaperCard/PaperCard';
import paperPhoto1 from '../../images/paper-card__photo_1.jpg';
import paperPhoto2 from '../../images/paper-card__photo_2.jpg';
import paperPhoto3 from '../../images/paper-card__photo_3.jpg';

const PapersPage = () => {
  const navigate = useNavigate(); // хук для использования программной навигации

  const [papersList, setPapersList] = React.useState([]); // список отображаемых карточек со статьями

  React.useEffect(() => {
    setPapersList([ // будет запрашиваться с бэкенда
      {id: 1,
        photo: paperPhoto1,
        title: 'Животное из приюта: что надо знать перед тем, как взять его в дом?'},
      {id: 2,
        photo: paperPhoto2,
        title: 'Как отучить собаку прыгать на вас при встрече'},
      {id: 3,
        photo: paperPhoto3,
        title: 'Современные кинологи не применяют наказание. Почему?'},
      {id: 4,
        photo: paperPhoto1,
        title: 'Животное из приюта: что надо знать перед тем, как взять его в дом?'},
      {id: 5,
        photo: paperPhoto2,
        title: 'Как отучить собаку прыгать на вас при встрече'},
      {id: 6,
        photo: paperPhoto3,
      title: 'Современные кинологи не применяют наказание. Почему?'},
      {id: 7,
        photo: paperPhoto1,
        title: 'Животное из приюта: что надо знать перед тем, как взять его в дом?'},
      {id: 8,
        photo: paperPhoto2,
        title: 'Как отучить собаку прыгать на вас при встрече'},
      {id: 9,
        photo: paperPhoto3,
        title: 'Современные кинологи не применяют наказание. Почему?'},
    ]);
  }, []);

  return (
    <main className='main papers'>
      <div className='papers__head-block'>
        <h1 className='papers__title'>Полезные статьи</h1>
        <button className='button' type='button' onClick={() => navigate('/shelters')}>Хочу помогать</button>
      </div>
      <ul className='papers__grid'>
        {papersList.map((card) => (
          <li className='papers__grid-element' key={card.id}>
            <PaperCard
              id={card.id}
              photo={card.photo}
              title={card.title} />
          </li>
        ))}
      </ul>
      <button className='button margin_column-center' type='button'>Больше статей</button>
    </main>
  );
}

export default PapersPage;
