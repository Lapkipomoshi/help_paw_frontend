import React from 'react';
import './NewsSection.css';
import NewBigCard from '../NewBigCard/NewBigCard';
import NewCard from '../NewCard/NewCard';

const NewsSection = ({ newsList }) => {
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
        {newsList && newsList.map((card, index) => {
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
