import React from 'react';
import './NewPassword.css';
import UserForm from '../../components/UserForm/UserForm';
import Button from '../../ui/Button/Button';
import PasswordInput from '../../ui/PasswordInput/PasswordInput';
import MainContainer from '../../components/MainContainer/MainContainer';

const NewPassword = () => {
  return (
    <MainContainer theme='base'>
      <main className='main'>
        <section className='new-password'>
          <UserForm
            title='Новый пароль'
            formClass='recovery'
            formChildren={(
              <>
                <PasswordInput
                  spanClass='input__span'
                  spanText='Не менее 8 символов'
                />

                <Button className='new-password__button' submit disabled>Сменить пароль</Button>
              </>
            )}
          />
        </section>
      </main>
    </MainContainer>
  );
};

export default NewPassword;
