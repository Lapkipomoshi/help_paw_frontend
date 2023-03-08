import React, { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import './ShelterPage.css';
import MainContainer from '../../components/MainContainer/MainContainer';
import NestedRoutesMenu from '../../components/NestedRoutesMenu/NestedRoutesMenu';
import shelterApi from './api';
import { shelterLinkList } from '../../utils/constants';

const ShelterPage = () => {
  const { id } = useParams(); // id статьи, получаемый из url-адреса текущей страницы
  const [shelter, setShelter] = useState({}); // информация о приюте

  useEffect(() => {
    shelterApi
      .getShelter(id) // загрузка карточек с приютами на главной странице
      .then((res) => {
        setShelter(res);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [id]);

  return (
    <MainContainer theme='base'>
      <main className='main'>
        <section className='shelter-menu-section'>
          <NestedRoutesMenu linkList={shelterLinkList} gap={72} />
        </section>
        <Outlet context={{ shelter }} />
      </main>
    </MainContainer>
  );
};

export default ShelterPage;
