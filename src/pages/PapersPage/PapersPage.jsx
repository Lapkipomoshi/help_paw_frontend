import React from 'react';
import './PapersPage.css';
import PaperCard from '../../components/PaperCard/PaperCard';
import paperPhoto1 from '../../images/paper-card__photo_1.jpg';
import paperPhoto2 from '../../images/paper-card__photo_2.jpg';
import paperPhoto3 from '../../images/paper-card__photo_3.jpg';

const PapersPage = () => {
  const [papersList, setPapersList] = React.useState([]);

  React.useEffect(() => {
    setPapersList([ // будет запрашиваться с бэкенда
      {photo: paperPhoto1,
        title: 'Животное из приюта: что надо знать перед тем, как взять его в дом?'},
      {photo: paperPhoto2,
        title: 'Как отучить собаку прыгать на вас при встрече'},
      {photo: paperPhoto3,
        title: 'Современные кинологи не применяют наказание. Почему?'},
      {photo: paperPhoto1,
        title: 'Животное из приюта: что надо знать перед тем, как взять его в дом?'},
      {photo: paperPhoto2,
        title: 'Как отучить собаку прыгать на вас при встрече'},
      {photo: paperPhoto3,
      title: 'Современные кинологи не применяют наказание. Почему?'},
      {photo: paperPhoto1,
        title: 'Животное из приюта: что надо знать перед тем, как взять его в дом?'},
      {photo: paperPhoto2,
        title: 'Как отучить собаку прыгать на вас при встрече'},
      {photo: paperPhoto3,
        title: 'Современные кинологи не применяют наказание. Почему?'},
    ]);
  }, []);

  return (
    <main className='main papers'>
      <div className='papers__head-block'>
        <h1 className='papers__title'>Полезные статьи</h1>
        <button className='button'>Хочу помогать</button>
      </div>
      <ul className='papers__grid'>
        {papersList.map((card) => (
          <li className='papers__grid-element'>
            <PaperCard
              photo={card.photo}
              title={card.title} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default PapersPage;
