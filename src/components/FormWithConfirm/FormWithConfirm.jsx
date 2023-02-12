import React, { useState } from 'react';
import './FormWithConfirm.css';
import Button from '../../ui/Button/Button';
import CodeInput from '../../ui/CodeInput/CodeInput';

function FormWithConfirm({
  onSubmit,
}) {
  const [loading, setLoading] = useState(false);

  return (
    <div className='form__container'>
      <img className='form__image' src='../../images/icons/ic_male.svg' alt='Лапка' />
      <p className='form__text'>Введите код, отправленный на почту gfudhfs@gmail.com</p>

      <form
        className='form'
        onSubmit={onSubmit}
        noValidate
      >
        <CodeInput
          length={6}
          loading={loading}
          onComplete={() => {
            setLoading(true);
            setTimeout(() => { return setLoading(false); }, 10000);
          }}
        />

        <Button className='register-confirm__button-submit' submit disabled>Далее</Button>
        <Button className='register-confirm__button-retry' submit disabled>Отправить код еще раз 0:59</Button>
      </form>
    </div>
  );
}

export default FormWithConfirm;
