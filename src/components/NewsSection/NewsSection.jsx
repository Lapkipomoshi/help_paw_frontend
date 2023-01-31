import React from 'react';
import './NewsSection.css';
import NewBigCard from '../NewBigCard/NewBigCard';
import NewCard from '../NewCard/NewCard';

const NewsSection = ({ newsList }) => {
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
            (index !== 0 && index < 4) && (
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
