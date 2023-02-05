import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import UserContainer from '../../components/UserContainer/UserContainer';
import UserForm from '../../components/UserForm/UserForm';

const LoginPage = () => {
  return (
    <main className='main'>
      <section className='login'>
        <UserContainer
          containerClass='login'
        >
          <UserForm
            title='Вход'
            buttonText='Войти'
            formClass='login'
            buttonContainerClass='user-form__button-container user-form__button-container_login'
            buttonClass='user-form__button-submit user-form__button-submit_login'
            formChildren={(
              <>
                <label className='user-input__label'>E-mail</label>
                <input
                  className='user-input'
                  name='email'
                  type='email'
                  required
                  pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                />
                <span className='user-input__error' />

                <label className='user-input__label'>Пароль</label>
                <div className='user__password'>
                  <input
                    className='user-input user-input_password'
                    name='password'
                    type='password'
                    required
                  />
                  <button className='password-visibility' type='button' />
                </div>

                <span className='user-input__error' />
              </>
            )}

            buttonChildren={(
              <div className='login__authorization-container'>
                <Link className='login__link' to='/password-recovery'>Забыли пароль?</Link>

                <div className='login__signup-block'>
                  <p className='login__signup-text'>Нет аккаунта?</p>
                  <Link className='login__link' to='/sign-up'>Зарегистрироваться</Link>
                </div>
              </div>
            )}
          />
        </UserContainer>
      </section>

    </main>
  );
};

export default LoginPage;
