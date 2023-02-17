import React from 'react';
import { NavLink } from 'react-router-dom';
import './NestedRoutesMenu.css';

const NestedRoutesMenu = ({ linkList, gap = 56 }) => {
  return (
    <nav className='nested-routes-menu' style={{ gap: `${gap}px` }}>
      {linkList.map((item) => {
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
