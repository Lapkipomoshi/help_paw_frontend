import React from 'react';
import { Link } from 'react-router-dom';
import './NewCard.css';
import dataDarkIcon from '../../images/icons/ic_data_dark.svg';
import selfDarkIcon from '../../images/icons/ic_self_dark.svg';

const NewCard = ({
  id, header, publicationDate, shelter, image,
}) => {
  return (
    <Link className='new-card' to={`/news/${id}`}>
      <img className='new-card__image' src={image} alt={header} />
      <div className='new-card__content'>
        <h4 className='new-card__header'>{header}</h4>
        <div className='new-card__info-block'>
          <img className='new-card__icon' src={dataDarkIcon} alt='дата' />
          <p className='new-card__info'>{publicationDate}</p>
        </div>
        <div className='new-card__info-block'>
          <img className='new-card__icon' src={selfDarkIcon} alt='приют' />
          <p className='new-card__info'>{shelter.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewCard;
