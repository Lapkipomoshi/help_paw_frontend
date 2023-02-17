import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './SheltersListPage.css';
import Button from '../../ui/Button/Button';
import questionIcon from '../../images/icons/ic_question.svg';

const SheltersListPage = () => {
  return (
    <main className='main shelters-list-page'>
      <section className='shelter-search'>
        <div className='shelter-search__head'>
          <div className='shelter-search__title-block'>
            <h2 className='shelter-search__title'>Все приюты</h2>
            <Link className='shelter-search__link' to='/shelters'>Показать приюты на карте</Link>
          </div>
          <form className='search-form' noValidate>
            <input className='search-form__input' name='shelter' placeholder='Поиск...' required />
            <Button onClick={() => {}} submit>Искать</Button>
          </form>
        </div>
        <nav className='color-menu'>
          <NavLink
            className={({ isActive }) => {
              return `color-menu__link ${isActive ? 'color-menu__link_active' : ''}`;
            }}
            to='red'
          >
            Красные
            <img className='color-menu__question' src={questionIcon} alt='?' />
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return `color-menu__link ${isActive ? 'color-menu__link_active' : ''}`;
            }}
            to='yellow'
          >
            Жёлтые
            <img className='color-menu__question' src={questionIcon} alt='?' />
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return `color-menu__link ${isActive ? 'color-menu__link_active' : ''}`;
            }}
            to='green'
          >
            Зелёные
            <img className='color-menu__question' src={questionIcon} alt='?' />
          </NavLink>
        </nav>
      </section>
      <Outlet />
    </main>
  );
};

export default SheltersListPage;
