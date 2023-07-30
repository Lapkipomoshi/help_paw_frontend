import React from 'react';
import { Link } from 'react-router-dom';
import './PaperCard.scss';

const PaperCard = ({ id, photo, title }) => {
  return (
    <Link className='paper-card' to={`/papers/${id}`}>
      <div className='paper-card__image-container'>
        <img className='paper-card__image' src={photo} alt='фото' />
      </div>
      <p className='paper-card__text'>{title}</p>
    </Link>
  );
};

export default PaperCard;
