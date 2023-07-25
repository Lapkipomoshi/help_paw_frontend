import React, { useState, useEffect, useContext } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import './ShelterPage.css';
import MainContainer from '../../components/MainContainer/MainContainer';
import NestedRoutesMenu from '../../modules/NestedRoutesMenu/NestedRoutesMenu';
import shelterApi from './api';
import { shelterLinkList } from '../../utils/constants';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const ShelterPage = () => {
  const { id } = useParams(); // id приюта, получаемый из url-адреса текущей страницы
  const [shelter, setShelter] = useState({}); // информация о приюте
  const [isLoading, setIsLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    shelterApi
      .getShelterById(id) // загрузка инфо о приюте
      .then((res) => {
        setShelter(res);
        setIsLoading(false);

        if (currentUser !== undefined) {
          setIsOwner(currentUser.own_shelter.id === Number(id));
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [id, currentUser]);

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
