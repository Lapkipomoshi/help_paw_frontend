import React from 'react';
import { Link } from 'react-router-dom';
import './NewBigCard.css';
import dataIcon from '../../images/icons/ic_data.svg';
import selfIcon from '../../images/icons/ic_self.svg';

const NewBigCard = ({
  id, title, data, shelter, description, mainPhoto,
}) => {
  return (
    <Link className='new-big-card' to={`/news/${id}`}>
      <img className='new-big-card__photo' src={mainPhoto} alt={title} />
      <div className='new-big-card__content'>
        <div className='new-big-card__row'>
          <div className='new-big-card__info-block'>
            <img className='new-big-card__icon' src={dataIcon} alt='дата' />
            <p className='new-big-card__info'>{data}</p>
          </div>
          <div className='new-big-card__info-block'>
            <img className='new-big-card__icon' src={selfIcon} alt='приют' />
            <p className='new-big-card__info'>{shelter}</p>
          </div>
        </div>
        <h3 className='new-big-card__title'>{title}</h3>
        <p className='new-big-card__text'>{description}</p>
      </div>
    </Link>
  );
};

export default NewBigCard;
