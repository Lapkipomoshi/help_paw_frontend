import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './ShelterPage.css';

const ShelterPage = () => {
  return (
    <main className='main'>
      <section className='shelter-menu'>
        <nav className='shelter-menu__menu'>
          <NavLink
            className={({ isActive }) => {
              return `shelter-menu__link ${isActive ? 'shelter-menu__link_active' : ''}`;
            }}
            to='about'
          >
            О приюте
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return `shelter-menu__link ${isActive ? 'shelter-menu__link_active' : ''}`;
            }}
            to='how-to-help'
          >
            Как помочь
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return `shelter-menu__link ${isActive ? 'shelter-menu__link_active' : ''}`;
            }}
            to='news'
          >
            Новости
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return `shelter-menu__link ${isActive ? 'shelter-menu__link_active' : ''}`;
            }}
            to='pets'
          >
            Питомцы
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return `shelter-menu__link ${isActive ? 'shelter-menu__link_active' : ''}`;
            }}
            to='vacancies'
          >
            Вакансии
          </NavLink>
        </nav>
      </section>
      <Outlet />
    </main>
  );
};

export default ShelterPage;
