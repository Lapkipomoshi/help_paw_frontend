import React, { useState, useEffect, useContext } from 'react';
import './NewsSection.scss';
import NewBigCard from '../../components/NewBigCard/NewBigCard';
import NewCard from '../../components/NewCard/NewCard';
import AppContext from '../../contexts/App';
import newsApi from './api';

const NewsSection = ({ shelterId = null }) => {
  const app = useContext(AppContext);
  const [newsList, setNewsList] = useState([]); // список новостей

  const fetchNews = (fetchShelterId) => {
    newsApi
      .getNews({ shelterId: fetchShelterId, amount: 4 }) // загрузка статей
      .then((res) => {
        const resNews = res.results;
        setNewsList(resNews);
        if (shelterId) {
          if (!app.shelterNewsById) {
            app.shelterNewsById = {};
          }
          app.shelterNewsById[fetchShelterId] = resNews;
        } else {
          app.portalNews = resNews;
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const setShelterNews = () => {
    if (app.shelterNewsById && app.shelterNewsById[shelterId]) {
      setNewsList(app.shelterNewsById[shelterId]);
    } else {
      fetchNews(shelterId);
    }
  };

  const setPortalNews = () => {
    if (app.portalNews) {
      setNewsList(app.portalNews);
    } else {
      fetchNews(null);
    }
  };

  useEffect(() => {
    shelterId ? setShelterNews() : setPortalNews();
  }, []);

  return (
    <div className='news-section'>
      {newsList && newsList.length !== 0 ? (
        <NewBigCard
          id={newsList[0].id}
          header={newsList[0].header}
          publicationDate={newsList[0].pub_date}
          shelter={newsList[0].shelter}
          description={newsList[0].description}
          mainPhoto={newsList[0].profile_image}
        />
      ) : (
        <p>Новостей нет</p>
      )}
      <ul className='news-section__column'>
        {newsList &&
          newsList.length > 1 &&
          newsList.map((card, index) => {
            return (
              index !== 0 &&
              index < 4 && (
                <li className='news-section__item' key={card.id}>
                  <NewCard id={card.id} header={card.header} publicationDate={card.pub_date} shelter={card.shelter} image={card.profile_image} />
                </li>
              )
            );
          })}
      </ul>
    </div>
  );
};

export default NewsSection;
