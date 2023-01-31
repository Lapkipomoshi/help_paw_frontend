import React from 'react';
import './NewsSection.css';
import NewBigCard from '../NewBigCard/NewBigCard';
import NewCard from '../NewCard/NewCard';
import newPhoto from '../../images/new-big-card.jpg';
import newPhoto1 from '../../images/new-card__photo_1.jpg';
import newPhoto2 from '../../images/new-card__photo_2.jpg';
import newPhoto3 from '../../images/new-card__photo_3.jpg';

const NewsSection = () => {
  const [newsList, setNewsList] = React.useState([]); // список новостей

  React.useEffect(() => {
    setNewsList([ // будет запрашиваться с бэкенда
      {
        id: 1,
        title: 'В приюте Бирюлево побывали школьники',
        data: '12.12.2022',
        shelter: 'Приют Бирюлево',
        description: `Работники приюта показали им как устроен приют и ученики помогали выгуливать
        собак. Работники приюта показали им как устроен приют и ученики помогали выгуливать собак`,
        mainPhoto: newPhoto,
      },
      {
        id: 2,
        title: 'В приюте Бирюлево побывали школьники',
        data: '12.12.2022',
        shelter: 'Приют Бирюлево',
        description: `Работники приюта показали им как устроен приют и ученики помогали выгуливать
        собак. Работники приюта показали им как устроен приют и ученики помогали выгуливать собак`,
        mainPhoto: newPhoto1,
      },
      {
        id: 3,
        title: 'В приюте Бирюлево побывали школьники',
        data: '12.12.2022',
        shelter: 'Приют Бирюлево',
        description: `Работники приюта показали им как устроен приют и ученики помогали выгуливать
        собак. Работники приюта показали им как устроен приют и ученики помогали выгуливать собак`,
        mainPhoto: newPhoto2,
      },
      {
        id: 4,
        title: 'В приюте Бирюлево побывали школьники',
        data: '12.12.2022',
        shelter: 'Приют Бирюлево',
        description: `Работники приюта показали им как устроен приют и ученики помогали выгуливать
        собак. Работники приюта показали им как устроен приют и ученики помогали выгуливать собак`,
        mainPhoto: newPhoto3,
      },
    ]);
  }, []);

  return (
    <div className='news-section'>
      {newsList[0]
      && (
        <NewBigCard
          id={newsList[0].id}
          title={newsList[0].title}
          data={newsList[0].data}
          shelter={newsList[0].shelter}
          description={newsList[0].description}
          mainPhoto={newsList[0].mainPhoto}
        />
      )}
      <ul className='news-section__column'>
        {newsList.map((card, index) => {
          return (
            index !== 0 && (
              <li className='news-section__item' key={card.id}>
                <NewCard
                  id={card.id}
                  title={card.title}
                  data={card.data}
                  shelter={card.shelter}
                  image={card.mainPhoto}
                />
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default NewsSection;
