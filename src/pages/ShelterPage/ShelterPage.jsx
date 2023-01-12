import React from 'react';
import { Outlet, Link, Route } from 'react-router-dom';
import './ShelterPage.css';

const ShelterPage = () => {
  return (
    <main className='main'>
      <section className='shelter-menu'>
        <ul className="shelter-menu__menu">
          <li>
            <Link to=''>О приюте</Link>
          </li>
          <li>
            <Link to='how-to-help'>Как помочь</Link>
          </li>
          <li>
            <Link to='news'>Новости</Link>
          </li>
          <li>
            <Link to='pets'>Питомцы</Link>
          </li>
          <li>
            <Link to='vacancies'>Вакансии</Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </main>
  );
}

export default ShelterPage;
