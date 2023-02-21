import React from 'react';
import './SignUpConfirm.css';
import UserContainer from '../../components/UserContainer/UserContainer';
import FormWithConfirm from '../../components/FormWithConfirm/FormWithConfirm';

const SignUpConfirm = () => {
  return (
    <main className='main'>
      <section className='register-confirm'>
        <UserContainer
          containerClass='register'
        >
          <FormWithConfirm />

        </UserContainer>
      </section>
    </main>
  );
};

export default SignUpConfirm;
