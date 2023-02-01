import React from 'react';
import { Link } from 'react-router-dom';
import './PaperCard.css';

const PaperCard = ({ id, photo, title }) => {
  return (
    <Link className='paper-card' to={`/papers/${id}`}>
      <img className='paper-card__image' src={photo} alt='фото' />
      <p className='paper-card__text'>{title}</p>
    </Link>
  );
};

export default PaperCard;
