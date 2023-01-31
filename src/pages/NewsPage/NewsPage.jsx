import React from 'react';
import './NewsPage.css';
import NewsSection from '../../components/NewsSection/NewsSection';
import Button from '../../ui/Button/Button';
import newPhoto from '../../images/new-big-card.jpg';
import newPhoto1 from '../../images/new-card__photo_1.jpg';
import newPhoto2 from '../../images/new-card__photo_2.jpg';
import newPhoto3 from '../../images/new-card__photo_3.jpg';

const NewsPage = () => {
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
    <main className='main news'>
      <div className='news__title-row'>
        <h2 className='news__title'>Новости</h2>
        <Button className='margin-left_auto' onClick={() => {}} disabled>Предложить новость</Button>
      </div>
      <NewsSection newsList={newsList} />
    </main>
  );
};

export default NewsPage;
