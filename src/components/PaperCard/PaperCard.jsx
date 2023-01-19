import React from 'react';
import { Link } from 'react-router-dom';
import './PaperCard.css';

const PaperCard = ({ photo, title }) => {
  return (
    <Link className='paper-card' to='/papers/1'>
      <img className='paper-card__image' src={photo} alt='фото' />
      <p className='paper-card__text'>{title}</p>
    </Link>
  );
}

export default PaperCard;
