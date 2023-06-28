import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ActivateEmailPage.scss';
import UserForm from '../../components/UserForm/UserForm';
import Button from '../../ui/Button/Button';
import MainContainer from '../../components/MainContainer/MainContainer';
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Paw from '../../images/icons/ic_paw.svg';
import * as auth from '../App/api/auth';

const ActivateEmailPage = () => {
  const [currentUser, setCurrentUser] = useState({
    email: '',
  });
  // eslint-disable-next-line camelcase
  const { uid, token, new_email } = useParams();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line camelcase
    auth.resetEmailConfirm({ uid, token, new_email })
      .then(() => {
        setIsActive(true);
        setCurrentUser({
          // eslint-disable-next-line camelcase
          email: new_email
        });
      })
      .catch(() => {
        setIsActive(false);
      });
  }, [uid, token]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                    <p className='activate-user__text'>{isActive ? 'Электронная почта изменена!' : 'Что-то пошло не так...'}</p>
                    <Button className='' link to={isActive ? '/sign-in' : '/'}>{isActive ? 'В личный кабинет' : 'На главную страницу'}</Button>
                  </>
                )}
              />
            </ProfileContainer>
          </section>
        </main>
      </MainContainer>
    </CurrentUserContext.Provider>
  );
};

export default ActivateEmailPage;
