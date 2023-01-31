import React from 'react';
import { Link } from 'react-router-dom';
import './SearchInput.css';
import Button from '../../ui/Button/Button';

const SearchInput = () => {
  return (
    <section className='search'>
      <form className='search__form search-form' method='get' name='searchForm'>
        <input className='search-form__input' id='searchInput' placeholder='Поиск...' />
        <Button onClick={() => {}} submit>Искать</Button>
      </form>
      <Link to='#' className='search__shelters-link'>Показать приюты списком</Link>
    </section>
  );
};

export default SearchInput;
