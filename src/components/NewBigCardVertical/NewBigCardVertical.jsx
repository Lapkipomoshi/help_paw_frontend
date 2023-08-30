import React from 'react';
import { Link } from 'react-router-dom';
import './NewBigCardVertical.css';
import dataIcon from '../../images/icons/ic_data.svg';
import selfIcon from '../../images/icons/ic_self.svg';

const NewBigCardVertical = ({
  id, header, publicationDate, shelter, description, mainPhoto,
}) => {
  return (
    <Link className='new-big-card-vertical' to={`/news/${id}`}>
      <img className='new-big-card-vertical__photo' src={mainPhoto} alt={header} />
      <div className='new-big-card-vertical__content'>
        <div className='new-big-card-vertical__row'>
          <div className='new-big-card-vertical__info-block'>
            <img className='new-big-card-vertical__icon' src={dataIcon} alt='дата' />
            <p className='new-big-card-vertical__info'>{publicationDate}</p>
          </div>
          <div className='new-big-card-vertical__info-block'>
            <img className='new-big-card-vertical__icon' src={selfIcon} alt='приют' />
            <p className='new-big-card-vertical__info'>{shelter.name}</p>
          </div>
        </div>
        <h3 className='new-big-card-vertical__header'>{header}</h3>
        <p className='new-big-card-vertical__text'>{description}</p>
      </div>
    </Link>
  );
};

export default NewBigCardVertical;
