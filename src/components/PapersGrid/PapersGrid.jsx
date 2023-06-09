import React from 'react';
import PaperCard from '../PaperCard/PaperCard';
import './PapersGrid.scss';

const PapersGrid = ({ papersList }) => {
  return (
    <ul className='papers-grid'>
      {papersList.map((card) => {
        return (
          <li className='papers-grid__element' key={card.id}>
            <PaperCard id={card.id} photo={card.profile_image} title={card.header} />
          </li>
        );
      })}
    </ul>
  );
};

export default PapersGrid;
