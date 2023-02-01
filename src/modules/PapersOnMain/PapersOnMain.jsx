import React from 'react';
import './PapersOnMain.css';
import PaperCard from '../../components/PaperCard/PaperCard';
import Button from '../../ui/Button/Button';
import paperPhoto1 from '../../images/paper-card__photo_1.jpg';
import paperPhoto2 from '../../images/paper-card__photo_2.jpg';
import paperPhoto3 from '../../images/paper-card__photo_3.jpg';

const PapersOnMain = () => {
  const [papersList, setPapersList] = React.useState([]); // список полезных статей на главной странице

  React.useEffect(() => {
    setPapersList([ // будет запрашиваться с бэкенда
      {
        id: 1,
        photo: paperPhoto1,
        title: 'Животное из приюта: что надо знать перед тем, как взять его в дом?',
      },
      {
        id: 2,
        photo: paperPhoto2,
        title: 'Как отучить собаку прыгать на вас при встрече',
      },
      {
        id: 3,
        photo: paperPhoto3,
        title: 'Современные кинологи не применяют наказание. Почему?',
      },
    ]);
  }, []);

  return (
    <section className='papers-on-main'>
      <h2 className='section-title'>Полезные статьи</h2>
      <ul className='papers-on-main__flex-container'>
        {papersList.map((card) => {
          return (
            <li className='papers-on-main__flex-element' key={card.id}>
              <PaperCard
                id={card.id}
                photo={card.photo}
                title={card.title}
              />
            </li>
          );
        })}
      </ul>
      <Button className='margin-left_auto' to='/papers' link>Все статьи</Button>
    </section>
  );
};

export default PapersOnMain;
