import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './SheltersListPage.css';
import MainContainer from '../../components/MainContainer/MainContainer';
import NestedRoutesMenu from '../../components/NestedRoutesMenu/NestedRoutesMenu';
import SearchInput from '../../components/SearchInput/SearchInput';
import { colorLinkList } from '../../utils/constants';

const SheltersListPage = () => {
  return (
    <MainContainer theme='base'>
      <main className='main shelters-list-page'>
        <section className='shelter-search'>
          <div className='shelter-search__head'>
            <div className='shelter-search__title-block'>
              <h2 className='shelter-search__title'>Все приюты</h2>
              <Link className='shelter-search__link' to='/shelters'>Показать приюты на карте</Link>
            </div>
            <SearchInput />
          </div>
          <NestedRoutesMenu linkList={colorLinkList} gap={56} />
        </section>
        <Outlet />
      </main>
    </MainContainer>
  );
};

export default SheltersListPage;
