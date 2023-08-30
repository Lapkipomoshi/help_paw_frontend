import React from 'react';
import { Link } from 'react-router-dom';
import './NewCardVertical.css';
import dataDarkIcon from '../../images/icons/ic_data_dark.svg';
import selfDarkIcon from '../../images/icons/ic_self_dark.svg';

const NewCardVertical = ({
  id, header, publicationDate, shelter, image,
}) => {
  return (
    <Link className='new-card-vertical' to={`/news/${id}`}>
      <img className='new-card-vertical__image' src={image} alt={header} />
      <div className='new-card-vertical__content'>
        <div className='new-card-vertical__info-block'>
          <img className='new-card-vertical__icon' src={dataDarkIcon} alt='дата' />
          <p className='new-card-vertical__info'>{publicationDate}</p>
          <img className='new-card-vertical__icon' src={selfDarkIcon} alt='приют' />
          <p className='new-card-vertical__info'>{shelter.name}</p>
        </div>
        <h4 className='new-card-vertical__header'>{header}</h4>
      </div>
    </Link>
  );
};

export default NewCardVertical;
