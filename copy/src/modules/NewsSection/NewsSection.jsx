import React, { useState, useEffect, useContext } from 'react';
import './NewsSection.scss';
import NewsBlock from '../NewsBlock/NewsBlock';
import Button from '../../ui/Button/Button';
import AppContext from '../../contexts/App';
import newsApi from './api';

const NewsSection = ({ shelterId = null }) => {
  const app = useContext(AppContext);
  const [newsList, setNewsList] = useState([]); // список новостей
  const [newsToFetch, setNewsToFetch] = useState(4); // число новостей для подгрузки
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreNews, setHasMoreNews] = useState(false);

  useEffect(() => {
    console.log(newsList);
  }, [newsList]);

  useEffect(() => {
    console.log(newsToFetch);
  }, [newsToFetch]);

  const fetchNews = (fetchShelterId) => {
    newsApi
      .getNews({ shelterId: fetchShelterId, amount: newsToFetch }) // загрузка статей
      .then((res) => {
        console.log(res);
        const resNews = res.results;
        console.log(res.results);
        setNewsList(...newsList, { data: resNews, type: newsToFetch });
        if (shelterId) {
          if (!app.shelterNewsById) {
            app.shelterNewsById = {};
          }
          app.shelterNewsById[fetchShelterId] = resNews;
        } else {
          app.portalNews = resNews;
        };

        const resNest = Boolean(res.next);
        setHasMoreNews(resNest);
        app.hasMoreNews = resNest;
      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    if (newsToFetch === 4) {
      setNewsToFetch(7);
    };
    if (newsToFetch === 7) {
      setNewsToFetch(4);
    };
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
      console.log(1);
      setNewsList({ data: app.portalNews, type: app.portalNews.length });
    } else {
      fetchNews(null);
    }
  };

  useEffect(() => {
    shelterId ? setShelterNews() : setPortalNews();
  }, []);

  return (
    <>
      <div className='news-section'>
        {newsList && newsList !== [] && newsList.length !== 0 && newsList.length > 0 && (
          newsList.map((item, i) => {
            console.log(item);
            // eslint-disable-next-line react/no-array-index-key
            return <NewsBlock item={item} key={i} />;
          })
        )}
      </div>
      {hasMoreNews && (
        <Button className='button_theme_transparent' onClick={fetchNews} disabled={isLoading}>
            Больше новостей
        </Button>
      )}
    </>
  );
};

export default NewsSection;

/*
return (
    <>
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
          {newsList &&
          newsList.length > 4 &&
          newsList.map((card, index) => {
            return (
              index !== 0 &&
              index < 5 && (
                <li className='news-section__item' key={card.id}>
                  <NewCard id={card.id} header={card.header} publicationDate={card.pub_date} shelter={card.shelter} image={card.profile_image} />
                </li>
              )
            );
          })}
        </ul>
      </div>
      {hasMoreNews && (
        <Button className='button_theme_transparent' onClick={fetchNews} disabled={isLoading}>
            Больше новостей
        </Button>
      )}
    </>
  );
  */