import React from 'react';
import './MenuLink.scss';
import { NavLink } from 'react-router-dom';

const MenuLink = ({ children, url, onClick }) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return `menu-link ${isActive ? 'menu-link_active' : ''}`;
      }}
      to={`${url}`}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

export default MenuLink;
