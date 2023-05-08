import React, { useState, useEffect } from 'react';
import './NewsSection.scss';
import NewBigCard from '../../components/NewBigCard/NewBigCard';
import NewCard from '../../components/NewCard/NewCard';
import newsApi from './api';

const NewsSection = ({ shelterId }) => {
  const [newsList, setNewsList] = useState([]); // список новостей

  useEffect(() => {
    newsApi
      .getNews({ shelterId, amount: 4 }) // загрузка статей
      .then((res) => {
        setNewsList(res.results);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <div className='news-section'>
      {(newsList && newsList.length !== 0)
        ? (
          <NewBigCard
            id={newsList[0].id}
            header={newsList[0].header}
            data={newsList[0].pub_date}
            shelter={newsList[0].shelter}
            description={newsList[0].description}
            mainPhoto={newsList[0].profile_image}
          />
        )
        : <p>Новостей нет</p>}
      <ul className='news-section__column'>
        {newsList && newsList.length > 1 && newsList.map((card, index) => {
          return (
            (index !== 0 && index < 4) && (
              <li className='news-section__item' key={card.id}>
                <NewCard
                  id={card.id}
                  header={card.header}
                  data={card.pub_date}
                  shelter={card.shelter}
                  image={card.profile_image}
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
