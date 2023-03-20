import React, { useContext } from 'react';
import './ChangePasswordPage.css';
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../ui/Button/Button';
import UserForm from '../../components/UserForm/UserForm';
import UserLink from '../../ui/UserLink/UserLink';
import * as auth from '../../utils/auth';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const ChangePasswordPage = () => {
  const currentUser = useContext(CurrentUserContext);
  const { email } = currentUser;
  const handleSubmit = (evt) => {
    evt.preventDefault();
    auth.resetPassword({ email })
      .then(() => {
        console.log('success');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainContainer theme='base'>
      <main className='main'>
        <section className='change-password'>
          <ProfileContainer containerClass='change-password'>
            <UserLink modifier='return' linkAddress='/profile' linkText='Назад в личный кабинет' />
            <UserForm
              title='Изменить пароль'
              formClass='change-password'
              onSubmit={handleSubmit}
              modifier='change-password'
              formChildren={(
                <>
                  <p className='change-password__text'>Вы уверены, что хотите изменить пароль?</p>
                  <p className='change-password__text'>После нажатия на кнопку, на вашу почту придет письмо со ссылкой для сброса пароля</p>
                  <Button submit>Сбросить пароль</Button>
                </>
              )}
            />
          </ProfileContainer>
        </section>
      </main>
    </MainContainer>
  );
};

export default ChangePasswordPage;
