import React from 'react';
import { Link } from 'react-router-dom';
import './NewBigCard.css';
import dataIcon from '../../images/icons/ic_data.svg';
import selfIcon from '../../images/icons/ic_self.svg';

const NewBigCard = ({
  id, header, publicationDate, shelter, description, mainPhoto,
}) => {
  return (
    <Link className='new-big-card' to={`/news/${id}`}>
      <img className='new-big-card__photo' src={mainPhoto} alt={header} />
      <div className='new-big-card__content'>
        <div className='new-big-card__row'>
          <div className='new-big-card__info-block'>
            <img className='new-big-card__icon' src={dataIcon} alt='дата' />
            <p className='new-big-card__info'>{publicationDate}</p>
          </div>
          <div className='new-big-card__info-block'>
            <img className='new-big-card__icon' src={selfIcon} alt='приют' />
            <p className='new-big-card__info'>{shelter.name}</p>
          </div>
        </div>
        <h3 className='standard-font standard-font_type_h3 new-big-card__header'>{header}</h3>
        <p className='new-big-card__text'>{description}</p>
      </div>
    </Link>
  );
};

export default NewBigCard;
