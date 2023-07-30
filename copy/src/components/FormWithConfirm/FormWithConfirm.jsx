import React, { useEffect, useState } from 'react';
import './FormWithConfirm.css';
import Button from '../../ui/Button/Button';
import CodeInput from '../../ui/CodeInput/CodeInput';
import Paw from '../../images/icons/ic_paw.svg';

function FormWithConfirm({ onSubmit, userEmail }) {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
  };

  return (
    <div className='form__container'>
      <img className='form__image' src={Paw} alt='Лапка' />
      <p className='form__text'>
        Введите код, отправленный на почту {userEmail}
      </p>

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
          value={otp}
          onChange={({ target }) => {
            setOtp(target.value);
          }}
        />

        <Button className='register-confirm__button-submit' submit disabled>Далее</Button>

        <div className={`retry-wrapper ${seconds > 0 || minutes > 0 ? 'retry-wrapper_disabled' : ''}`}>
          <button
            className='register-confirm__button-retry'
            type='submit'
            disabled={seconds > 0 || minutes > 0}
            onClick={resendOTP}
          >
            Отправить код еще раз
          </button>

          <p className={`retry__timer ${seconds > 0 || minutes > 0 ? 'retry__timer_disabled' : ''}`}>
            {minutes < 10 ? `0${minutes}` : minutes}
            :
            {seconds < 10 ? `0${seconds}` : seconds}
          </p>
        </div>
      </form>
    </div>
  );
}

export default FormWithConfirm;
