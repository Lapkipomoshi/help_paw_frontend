import React from 'react';
import './SearchInput.css';
import { Link } from 'react-router-dom';

const SearchInput = () => {
  return (<section className="search">
      <form className="search__form search-form" method="get" name="searchForm">
        <input className="search-form__input" id="searchInput" placeholder="Поиск..."/>
        <button className="search-form__submit" type="submit">Искать</button>
      </form>
      <Link to="#" className="search__shelters-link">Показать приюты списком</Link>
    </section>
  );
};

export default SearchInput;
