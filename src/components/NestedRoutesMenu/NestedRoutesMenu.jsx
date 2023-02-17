import React from 'react';
import { NavLink } from 'react-router-dom';
import './NestedRoutesMenu.css';

const NestedRoutesMenu = ({ linkList, gap }) => {
  return (
    <nav className='nested-routes-menu'>
      <style>
        {`.nested-routes-menu {
          column-gap: ${gap}px;
        }`}
      </style>
      {linkList.map((item) => { // список карточек с часто задаваемыми вопросами
        return (
          <NavLink
            className={({ isActive }) => {
              return `nested-routes-menu__link ${isActive && 'nested-routes-menu__link_active'}`;
            }}
            to={item.to}
            key={item.to}
          >
            {item.caption}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NestedRoutesMenu;
