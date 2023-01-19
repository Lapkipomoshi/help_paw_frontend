import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './ShelterPage.css';

const ShelterPage = () => {
  return (
    <main className='main'>
      <section className='shelter-menu'>
        <nav className="shelter-menu__menu">
          <NavLink to='about' className={({isActive}) => `shelter-menu__link ${isActive ? 'shelter-menu__link_active' : ''}`}>О приюте</NavLink>
          <NavLink to='how-to-help' className={({isActive}) => `shelter-menu__link ${isActive ? 'shelter-menu__link_active' : ''}`}>Как помочь</NavLink>
          <NavLink to='news' className={({isActive}) => `shelter-menu__link ${isActive ? 'shelter-menu__link_active' : ''}`}>Новости</NavLink>
          <NavLink to='pets' className={({isActive}) => `shelter-menu__link ${isActive ? 'shelter-menu__link_active' : ''}`}>Питомцы</NavLink>
          <NavLink to='vacancies' className={({isActive}) => `shelter-menu__link ${isActive ? 'shelter-menu__link_active' : ''}`}>Вакансии</NavLink>
        </nav>
      </section>
      <Outlet />
    </main>
  );
}

export default ShelterPage;
