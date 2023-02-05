import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import UserContainer from '../../components/UserContainer/UserContainer';
import UserForm from '../../components/UserForm/UserForm';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import PasswordInput from '../../ui/PasswordInput/PasswordInput';

const LoginPage = () => {
  return (
    <main className='main'>
      <section className='login'>
        <UserContainer
          containerClass='login'
        >
          <UserForm
            title='Вход'
            formClass='login'
            formChildren={(
              <>
                <Input
                  labelText='E-mail'
                  inputName='email'
                  inputType='email'
                  pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                />

                <PasswordInput
                  spanClass='input__error'
                  spanText=''
                />

                <Button className='user-form__button-submit_login' submit disabled>Войти</Button>

                <div className='login__authorization-container'>
                  <Link className='login__link' to='/password-recovery'>Забыли пароль?</Link>

                  <div className='login__signup-block'>
                    <p className='login__signup-text'>Нет аккаунта?</p>
                    <Link className='login__link' to='/sign-up'>Зарегистрироваться</Link>
                  </div>
                </div>
              </>
            )}
          />
        </UserContainer>
      </section>

    </main>
  );
};

export default LoginPage;
