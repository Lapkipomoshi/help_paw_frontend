import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NestedRoutesMenu.css';
import Question from './svg/Question';

const NestedRoutesMenu = ({ linkList, gap = 56, onSelect }) => {
  const [activeItem, setActiveItem] = useState(linkList[0].to);

  const handleItemClick = (item) => {
    onSelect(item.to);
    setActiveItem(item.to);
  };

  return (
    <nav className='nested-routes-menu' style={{ gap: `${gap}px` }}>
      {linkList.map((item) => {
        return (
          <NavLink
            onClick={() => {
              return handleItemClick(item);
            }}
            className={`nested-routes-menu__link ${item.to === activeItem ? 'nested-routes-menu__link_active' : ''}`}
            to={item.to}
            key={item.to}
          >
            {item.caption}
            {item.explanation && <Question />}
            {item.explanation && <p className='nested-routes-menu__explanation'>{item.explanation}</p>}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NestedRoutesMenu;
