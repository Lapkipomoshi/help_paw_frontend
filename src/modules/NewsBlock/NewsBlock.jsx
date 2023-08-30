import React from 'react';
import './NewsBlock.scss';
import NewBigCard from '../../components/NewBigCard/NewBigCard';
import NewBigCardVertical from '../../components/NewBigCardVertical/NewBigCardVertical';
import NewCard from '../../components/NewCard/NewCard';
import NewCardVertical from '../../components/NewCardVertical/NewCardVertical';

const NewsBlock = ({ item }) => {

  return (
    <>
      {item && item.type === 4 && (
        <>
          {item && item.data.length !== 0 ? (
            <NewBigCard
              id={item.data[0].id}
              header={item.data[0].header}
              publicationDate={item.data[0].pub_date}
              shelter={item.data[0].shelter}
              description={item.data[0].description}
              mainPhoto={item.data[0].profile_image}
            />
          ) : (
            <p>Новостей нет</p>
          )}
          <ul className='news-block__column'>
            {item &&
            item.data.length > 1 &&
            item.data.map((card, index) => {
              return (
                index !== 0 &&
                index < 4 && (
                  <li className='news-block__item' key={card.id}>
                    <NewCard id={card.id} header={card.header} publicationDate={card.pub_date} shelter={card.shelter} image={card.profile_image} />
                  </li>
                )
              );
            })}
          </ul>
        </>
      )}
      {item && item.type === 7 && (
        <div className='news-block__section-vertical'>
          <div className='news-block__column-right'>
            {item && item.data.length !== 0 && item.data.length > 1 && (
              item.data.map((card, index) => {
                return (
                  index < 6 && (
                    <li className='news-block__item' key={card.id}>
                      <NewCardVertical id={card.id} header={card.header} publicationDate={card.pub_date} shelter={card.shelter} image={card.profile_image} />
                    </li>
                  )
                );
              }))
            }
          </div>
          {item && item.data.length === 7  &&
            <NewBigCardVertical
              id={item.data[6].id}
              header={item.data[6].header}
              publicationDate={item.data[6].pub_date}
              shelter={item.data[6].shelter}
              description={item.data[6].description}
              mainPhoto={item.data[6].profile_image}
            />
          }
        </div>
      )}
    </>
  );
};

export default NewsBlock;
