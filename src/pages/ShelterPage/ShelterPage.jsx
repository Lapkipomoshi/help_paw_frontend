import React, { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import './ShelterPage.css';
import MainContainer from '../../components/MainContainer/MainContainer';
import NestedRoutesMenu from '../../modules/NestedRoutesMenu/NestedRoutesMenu';
import shelterApi from './api';
import { shelterLinkList } from '../../utils/constants';

const ShelterPage = () => {
  const { id } = useParams(); // id приюта, получаемый из url-адреса текущей страницы
  const [shelter, setShelter] = useState({}); // информация о приюте

  const [isOwner, setIsOwner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('access');

    shelterApi
      .getShelterById(id) // загрузка инфо о приюте
      .then((res) => {
        setShelter(res);
        setIsLoading(false);
      })
      .catch((err) => {
        throw new Error(err);
      });

    if (token) {
      shelterApi
        .getOwnerShelterInfo(token)
        .then((res) => {
          setIsOwner(res.own_shelter.id === Number(id));
        })
        .catch(() => {
          setIsOwner(false);
        });
    }
  }, [id]);

  return (
    <MainContainer>
      <main className='main'>
        <section className='shelter-menu-section'>
          <NestedRoutesMenu linkList={shelterLinkList} gap={72} />
        </section>
        <Outlet context={{ shelter, isOwner, isLoading }} />
      </main>
    </MainContainer>
  );
};

export default ShelterPage;
