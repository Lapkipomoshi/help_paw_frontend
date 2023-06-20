import React from 'react';
import { NavLink } from 'react-router-dom';
import './NestedRoutesMenu.css';
import Question from './svg/Question';

const NestedRoutesMenu = ({ linkList, gap = 56, onSelect }) => {
  const handleItemClick = (item) => {
    onSelect(item.to);
  };
  return (
    <nav className='nested-routes-menu' style={{ gap: `${gap}px` }}>
      {linkList.map((item) => {
        return (
          <NavLink
            onClick={() => {
              return handleItemClick(item);
            }}
            // className={({ isActive }) => {
            //     return `nested-routes-menu__link ${isActive && 'nested-routes-menu__link_active'}`)}

            // className={({ isActive }) => {
            //   const shouldSetActive = item.to === 'red' || isActive;
            //   return `nested-routes-menu__link ${shouldSetActive ? 'active' : `${item.to === 'red'}`}`;
            // }}

            // className={({ isActive }) => {
            //   return `nested-routes-menu__link ${(isActive || item.to === 'red') && 'nested-routes-menu__link_active'}`;
            // }}

            className={({ isActive }) => {
              const shouldSetActive = isActive || item.to === 'red';
              return `nested-routes-menu__link ${shouldSetActive || item.to === 'red' ? 'nested-routes-menu__link_active' : ''}`;
            }}
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
