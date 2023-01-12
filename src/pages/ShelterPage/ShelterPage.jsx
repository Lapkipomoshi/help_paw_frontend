import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './ShelterPage.css';

const ShelterPage = () => {
  return (
    <main className='main'>
      <section className='shelter-menu'>
        <ul className="shelter-menu__menu">
          <li>
            <Link to='' className='shelter-menu__link shelter-menu__link_active'>О приюте</Link>
          </li>
          <li>
            <Link to='how-to-help' className='shelter-menu__link'>Как помочь</Link>
          </li>
          <li>
            <Link to='news' className='shelter-menu__link'>Новости</Link>
          </li>
          <li>
            <Link to='pets' className='shelter-menu__link'>Питомцы</Link>
          </li>
          <li>
            <Link to='vacancies' className='shelter-menu__link'>Вакансии</Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </main>
  );
}

export default ShelterPage;
