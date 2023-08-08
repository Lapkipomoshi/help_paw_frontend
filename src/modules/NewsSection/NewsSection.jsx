import React, { useState, useEffect, useContext, useRef } from 'react';
import './NewsSection.scss';
import NewsBlock from '../NewsBlock/NewsBlock';
import Button from '../../ui/Button/Button';
import AppContext from '../../contexts/App';
import newsApi from './api';

const NewsSection = ({ shelterId = null }) => {
  const app = useContext(AppContext);
  const [newsList, setNewsList] = useState([]); 
  const [newsToFetch, setNewsToFetch] = useState(4); // число новостей для подгрузки
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreNews, setHasMoreNews] = useState(false);
  const [newsOffset, setNewsOffset] = useState(0);
  const moreButtonRef = useRef(null);
  const moreButton = moreButtonRef.current;
  const [arg, setArg] = useState(null);

  useEffect(() => {
    if (shelterId)
      setArg(shelterId);
  }, []);

  useEffect(() => {
    if (moreButton) {
      moreButton.blur();
    }
  }, [resList]);

  const setShelterNewsToFetch = () => {
    if (newsToFetch === 4) {
      app.shelterNewsOffsetById[shelterId] = newsOffset + 4;
      setNewsOffset(newsOffset + 4);
      app.shelterNewsToFetchById[shelterId] = 7;
      setNewsToFetch(7);
    } else if (newsToFetch === 7) {
      app.shelterNewsOffsetById[shelterId] = newsOffset + 7;
      setNewsOffset(newsOffset + 7);
      app.shelterNewsToFetchById[shelterId] = 4;
      setNewsToFetch(4);
    }
  };

  const setPortalNewsToFetch = () => {
    if (newsToFetch === 4) {
      app.newsOffset = newsOffset + 4;
      setNewsOffset(newsOffset + 4);
      app.portalNewsToFetch = 7;
      setNewsToFetch(7);
    } else if (newsToFetch === 7) {
      app.newsOffset = newsOffset + 7;
      setNewsOffset(newsOffset + 7);
      app.portalNewsToFetch = 4;
      setNewsToFetch(4);
    }
  };

  const fetchNews = (fetchShelterId) => {
    newsApi
      .getNews({ shelterId: fetchShelterId, amount: newsToFetch, offset: newsOffset }) // загрузка статей
      .then((res) => {
        const resNews = res.results;
        setResList([...resList, { data: resNews, type: newsToFetch }]);
        const resNest = Boolean(res.next);
        setHasMoreNews(resNest);
        if (shelterId) {
          if (!app.shelterNewsById) {
            app.shelterNewsById = {};
            app.shelterNewsOffsetById = {};
            app.shelterNewsToFetchById = {};
            app.hasMoreShelterNewsById = {};
            app.shelterNewsById[shelterId] = [{ data: resNews, type: newsToFetch }];
            app.hasMoreShelterNewsById[shelterId] = resNest;
            setShelterNewsToFetch();
          } else if (app.shelterNewsById) {
            if (app.shelterNewsById[shelterId] || app.shelterNewsById[shelterId] === 0) {
              app.shelterNewsById[shelterId].push({ data: resNews, type: newsToFetch });
              app.hasMoreShelterNewsById[shelterId] = resNest;
              setShelterNewsToFetch();
            } else if (typeof(app.shelterNewsById[shelterId]) === 'undefined') {
              app.shelterNewsById[shelterId] = [{ data: resNews, type: newsToFetch }];
              app.hasMoreShelterNewsById[shelterId] = resNest;
              setShelterNewsToFetch();
            }
          }
        } else if (!app.portalNews) {
          app.portalNews = [{ data: resNews, type: newsToFetch }];
          app.hasMorePortalNews = resNest;
          setPortalNewsToFetch();
        } else {
          app.portalNews.push({ data: resNews, type: newsToFetch });
          app.hasMorePortalNews = resNest;
          setPortalNewsToFetch();
        };

      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });

  };

  const setShelterNews = () => {
    if (app.shelterNewsById && app.shelterNewsById[shelterId]) {
      setResList(app.shelterNewsById[shelterId]);
      setHasMoreNews(app.hasMoreShelterNewsById[shelterId]);
      setNewsToFetch(app.shelterNewsToFetchById[shelterId]);
      setNewsOffset(app.shelterNewsOffsetById[shelterId]);
    } else {
      fetchNews(shelterId);
    }
  };

  const setPortalNews = () => {
    if (app.portalNews) {
      setResList(app.portalNews);
      setHasMoreNews(app.hasMorePortalNews);
      setNewsToFetch(app.portalNewsToFetch);
      setNewsOffset(app.newsOffset);
    } else {
      fetchNews(null);
    }
  };

  useEffect(() => {
    shelterId ? setShelterNews() : setPortalNews();
  }, []);

  return (
    <>
      { resList !== null && resList.length !== 0 && (
        resList.map((current) => {
          return <div className='news-section' key={current.data[0].id}>
            <NewsBlock item={current}  />
          </div>;
        })
      )}

      {hasMoreNews && resList !== [] && (
        <Button className='button_theme_transparent' onClick = {() => {return fetchNews(arg);}} disabled={isLoading} innerRef={moreButtonRef}>
            Больше новостей
        </Button>
      )}
    </>
  );
};

export default NewsSection;
