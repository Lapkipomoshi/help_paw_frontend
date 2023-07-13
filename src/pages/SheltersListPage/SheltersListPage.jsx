import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SheltersListPage.css';
import MainContainer from '../../components/MainContainer/MainContainer';
import NestedRoutesMenu from '../../modules/NestedRoutesMenu/NestedRoutesMenu';
import SearchInput from '../../components/SearchInput/SearchInput';
import ShelterCard from '../../components/ShelterCard/ShelterCard';
import ShelterList from '../../modules/ShelterList/ShelterList';
import { colorLinkList } from '../../utils/constants';
import SheltersListApi from './api';

const SheltersListPage = () => {
  const { color } = useParams();

  const [sheltersList, setSheltersList] = useState([]);

  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    SheltersListApi.getSheltersByWarning(color)
      .then((sheltersArray) => {
        const newSheltersList = sheltersArray.map((res) => {
          return {
            id: res.id,
            profileImage: res.profile_image,
            address: res.address,
            name: res.name,
            startHour: res.working_from_hour,
            finishHour: res.working_to_hour,
            webSite: res.web_site,
            logo: res.logo,
            warning: res.warning,
          };
        });
        setSheltersList(newSheltersList);
        setIsDataLoading(false);
      })
      .catch((err) => {
        setIsDataLoading(true);
        throw new Error(err);
      });
  }, [color]);

  // Получение списка приютов и их отображение в виде карточек приютов
  const shelters = sheltersList.map((shelter) => {
    return (
      <li key={shelter.id}>
        <ShelterCard
          id={shelter.id}
          name={shelter.name}
          address={shelter.address}
          workingFromHour={shelter.startHour}
          workingToHour={shelter.finishHour}
          logo={shelter.logo}
          profileImage={shelter.profileImage}
        />
      </li>
    );
  });

  return (
    <MainContainer theme='base'>
      <main className='main shelters-list-page'>
        <section className='shelter-search'>
          <div className='shelter-search__head'>
            <div className='shelter-search__title-block'>
              <h2 className='shelter-search__title'>Все приюты</h2>
              <Link className='shelter-search__link' to='/shelters'>
                Показать приюты на карте
              </Link>
            </div>
            <SearchInput />
          </div>
          <NestedRoutesMenu linkList={colorLinkList} gap={56} />
        </section>
        <ShelterList isDataLoading={isDataLoading} shelters={shelters} />
      </main>
    </MainContainer>
  );
};

export default SheltersListPage;
