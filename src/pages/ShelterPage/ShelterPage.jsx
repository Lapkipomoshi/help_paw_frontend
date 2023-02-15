import React from 'react';
import { Outlet, NavLink, useParams } from 'react-router-dom';
import './ShelterPage.css';
import shelterApi from './api';

const ShelterPage = () => {
  const { id } = useParams(); // id статьи, получаемый из url-адреса текущей страницы
  const [shelter, setShelter] = React.useState({}); // информация о приюте

  React.useEffect(() => {
    shelterApi
      .getShelter(id) // загрузка карточек с приютами на главной странице
      .then((res) => {
        console.log(res);
        setShelter(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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
      <Outlet shelter={shelter} />
    </main>
  );
};

export default ShelterPage;
