import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ActivateUserPage.css';
import UserForm from '../../components/UserForm/UserForm';
import Button from '../../ui/Button/Button';
import MainContainer from '../../components/MainContainer/MainContainer';
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer';
import Paw from '../../images/icons/ic_paw.svg';
import activateUser from './api';

const ActivateUserPage = () => {
  const { uid, token } = useParams();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    activateUser({ uid, token })
      .then(() => {
        setIsActive(true);
      })
      .catch((err) => {
        setIsActive(false);
        throw new Error(err);
      });
  }, []);

  return (
    <MainContainer>
      <main className='main'>
        <section className='activate-user'>
          <ProfileContainer containerClass='activate-user'>
            <UserForm
              formClass='activate-user'
              modifier='activate-user'
              formChildren={(
                <>
                  <img className='activate-user__image' src={Paw} alt='Лапка' />
                  <p className='activate-user__text'>{isActive ? 'Ваш аккаунт подтвержден!' : 'Что-то пошло не так...'}</p>
                  <Button link to={isActive ? '/sign-in' : '/'}>{isActive ? 'Войти в личный кабинет' : 'На главную страницу'}</Button>
                </>
              )}
            />
          </ProfileContainer>
        </section>
      </main>
    </MainContainer>
  );
};

export default ActivateUserPage;
