import React from 'react';
import './SearchInput.css';
import Button from '../../ui/Button/Button';

const SearchInput = ({ onSubmit = (e) => { return e.preventDefault(); } }) => {
  return (
    <form className='search-form' method='get' onSubmit={onSubmit} name='searchForm' noValidate>
      <input className='search-form__input' id='searchInput' placeholder='Поиск...' />
      <Button onClick={() => {}} submit>Искать</Button>
    </form>
  );
};

export default SearchInput;
