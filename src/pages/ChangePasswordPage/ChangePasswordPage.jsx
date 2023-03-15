import React from 'react';
import './ChangePasswordPage.css';
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../ui/Button/Button';
import UserForm from '../../components/UserForm/UserForm';
import UserLink from '../../ui/UserLink/UserLink';

const ChangePasswordPage = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
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
                  <p className='change-password__text'>После нажатия на кнопку, на вашу почту прийдет письмо со ссылкой для сброса пароля</p>
                  <Button className='' submit>Сбросить пароль</Button>
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
