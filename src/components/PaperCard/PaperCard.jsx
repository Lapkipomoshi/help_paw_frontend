import React from 'react';
import { Link } from 'react-router-dom';
import './PaperCard.css';

const PaperCard = ({ photo, text }) => {
  return (
    <Link className='paper-card' to='/papers/1'>
      <img className='paper-card__image' src={photo} alt='фото' />
      <p className='paper-card__text'>{text}</p>
    </Link>
  );
}

export default PaperCard;
