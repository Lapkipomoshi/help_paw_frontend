import React, { useState, useEffect } from 'react';
import './MyShelterPage.scss';
import { Outlet, Link, useLocation } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import LeftArrowIcon from '../../images/LeftArrowIcon/LeftArrowIcon';
import myShelterApi from './api';

const MyShelterPage = () => {
  const { mySheltersId } = useLocation().state;
  const [shelter, setShelter] = useState({}); 
  const isOwner = true;
  const [isLoading, setIsLoading] = useState(true);

  const BACK_LINK_TEXT = 'Вернуться в Личный Кабинет';

  useEffect(() => {
    myShelterApi.getShelterById(mySheltersId)
      .then((res) => {
        setShelter(res);
        setIsLoading(false);
      })
      .catch((err) => {
        throw new Error(err);
      });}, [mySheltersId]);


  return (
    <MainContainer>
      <main className='main'>
        <section className='my-shelter-section'>
          <Link to='/profile' className='my-shelter-section__back-profile-button'>
            <LeftArrowIcon /><span>{BACK_LINK_TEXT}</span>
          </Link>
          <Outlet context={{ shelter, isOwner, isLoading }} />
        </section>
      </main>
    </MainContainer>
  );
};

export default MyShelterPage;
