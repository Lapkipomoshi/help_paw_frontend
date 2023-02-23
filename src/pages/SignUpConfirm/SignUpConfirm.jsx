import React from 'react';
import './SignUpConfirm.css';
import UserContainer from '../../components/UserContainer/UserContainer';
import FormWithConfirm from '../../components/FormWithConfirm/FormWithConfirm';
import MainContainer from '../../components/MainContainer/MainContainer';

const SignUpConfirm = () => {
  return (
    <MainContainer>
      <main className='main'>
        <section className='register-confirm'>
          <UserContainer
            containerClass='register-confirm'
          >
            <FormWithConfirm />

          </UserContainer>
        </section>
      </main>
    </MainContainer>
  );
};

export default SignUpConfirm;
