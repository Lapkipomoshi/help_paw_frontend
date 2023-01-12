import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import './ShelterPage.css';

const ShelterPage = () => {
  return (
    <main className='main'>
      <section className='shelter-menu'>
        <ul className="shelter-menu__menu">
          <li>
            <NavLink to='about' className={({isActive}) => `shelter-menu__link ${isActive ? 'shelter-menu__link_active' : ''}`}>О приюте</NavLink>
          </li>
          <li>
            <NavLink to='how-to-help' className={({isActive}) => `shelter-menu__link ${isActive ? 'shelter-menu__link_active' : ''}`}>Как помочь</NavLink>
          </li>
          <li>
            <NavLink to='news' className={({isActive}) => `shelter-menu__link ${isActive ? 'shelter-menu__link_active' : ''}`}>Новости</NavLink>
          </li>
          <li>
            <NavLink to='pets' className={({isActive}) => `shelter-menu__link ${isActive ? 'shelter-menu__link_active' : ''}`}>Питомцы</NavLink>
          </li>
          <li>
            <NavLink to='vacancies' className={({isActive}) => `shelter-menu__link ${isActive ? 'shelter-menu__link_active' : ''}`}>Вакансии</NavLink>
          </li>
        </ul>
      </section>
      <Outlet />
    </main>
  );
}

export default ShelterPage;
