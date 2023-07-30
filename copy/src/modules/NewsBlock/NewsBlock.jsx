import React, { useState, useEffect /* , useContext */ } from 'react';
import './NewsBlock.scss';
import NewBigCard from '../../components/NewBigCard/NewBigCard';
import NewCard from '../../components/NewCard/NewCard';
// import AppContext from '../../contexts/App';
// import newsApi from './api';

const NewsBlock = (props) => {
  // const app = useContext(AppContext);
  const [newsList, setNewsList] = useState([]);
  const { item } = props;

  useEffect(() => {
    console.log(item);
    console.log(item.data);
  }, []);

  useEffect(() => {
    setNewsList(item.data);
  }, [newsList]);

  useEffect(() => {
    console.log(newsList);
  }, [newsList]);

  /* const setShelterNews = () => {
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
  }; */

  /* const leftNewsBlock = (
    {
      item
    }
  ) => {
    console.log(item);
    console.log(1);
    // console.log(item[0].id);
    return (
      <>
        {item && item.length !== 0 ? (
          <NewBigCard
            id={item[0].id}
            header={item[0].header}
            publicationDate={item[0].pub_date}
            shelter={item[0].shelter}
            description={item[0].description}
            mainPhoto={item[0].profile_image}
          />
        ) : (
          <p>Новостей нет</p>
        )}
        <ul className='news-section__column'>
          {item &&
          item.length > 1 &&
          item.map((card, index) => {
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
      </>
    );
  };

  const renderNewsBlock = (item) => {
    return (
      <>
        {item.type === 7 && (
        {item && item.length !== 0 && item.length > 1 ? (
          item.data.map((card, index) => {
            return (
              index !== 0 &&
              index < 6 && (
                <li className='news-section__item' key={card.id}>
                  <NewCard id={card.id} header={card.header} publicationDate={card.pub_date} shelter={card.shelter} image={card.profile_image} />
                </li>
              )
            );
          })) : (
          <p>Новостей нет</p>
        )}
        {item && item.length === 7  &&
          <NewBigCard
            id={item[7].id}
            header={item[7].header}
            publicationDate={item[7].pub_date}
            shelter={item[7].shelter}
            description={item[7].description}
            mainPhoto={item[7].profile_image}
          />
        }
      )}
      </>
    );
  };

  useEffect(() => {
    shelterId ? setShelterNews() : setPortalNews();
  }, []); */

  return (
    <>
      {item.type === 4 && (
        <div>
          {item && item.length !== 0 ? (
            <NewBigCard
              id={item[0].id}
              header={item[0].header}
              publicationDate={item[0].pub_date}
              shelter={item[0].shelter}
              description={item[0].description}
              mainPhoto={item[0].profile_image}
            />
          ) : (
            <p>Новостей нет</p>
          )}
          <ul className='news-section__column'>
            {item &&
            item.length > 1 &&
            item.map((card, index) => {
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
      )}
      {item.type === 7 && (
        <div>
          {item && item.length !== 0 && item.length > 1 ? (
            item.data.map((card, index) => {
              return (
                index !== 0 &&
                index < 6 && (
                  <li className='news-section__item' key={card.id}>
                    <NewCard id={card.id} header={card.header} publicationDate={card.pub_date} shelter={card.shelter} image={card.profile_image} />
                  </li>
                )
              );
            })) : (
            <p>Новостей нет</p>
          )}
          {item && item.length === 7  &&
            <NewBigCard
              id={item[7].id}
              header={item[7].header}
              publicationDate={item[7].pub_date}
              shelter={item[7].shelter}
              description={item[7].description}
              mainPhoto={item[7].profile_image}
            />
          }
        </div>
      )}
    </>
  );
};

/* return (
    {firstType && (
      <div>
        {item && item.length !== 0 ? (
          <NewBigCard
            id={item[0].id}
            header={item[0].header}
            publicationDate={item[0].pub_date}
            shelter={item[0].shelter}
            description={item[0].description}
            mainPhoto={item[0].profile_image}
          />
        ) : (
          <p>Новостей нет</p>
        )}
        <ul className='news-section__column'>
          {item &&
          item.length > 1 &&
          item.map((card, index) => {
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
        </div>)
      }
  );
}; */

export default NewsBlock;
