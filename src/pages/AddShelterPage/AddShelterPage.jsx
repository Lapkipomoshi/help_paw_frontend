import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddShelterPage.css';
import OwnerStep from './components/OwnerStep';
import ShelterStep from './components/ShelterStep';
import MainContainer from '../../components/MainContainer/MainContainer';
import addShelterApi from './api';
import imageSuccess from '../../images/icons/ic_success.svg';
import imageError from '../../images/icons/ic_error.svg';

const AddShelterPage = ({
  currentUser, openPopup, setPopupImage, setMessage,
}) => {
  const navigate = useNavigate(); // подключение программной навигации

  const [step, setStep] = useState(1);
  const [shelterOwner, setShelterOwner] = useState({});
  const [shelter, setShelter] = useState({});

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      const token = localStorage.getItem('access');
      addShelterApi.postShelter(token, { ...shelterOwner, ...shelter })
        .then(() => {
          setPopupImage(imageSuccess);
          setMessage('Заявка на добавление приюта успешно добавлена! Её состояние можно отслеживать в личном кабинете.');
          openPopup(true);
          setTimeout(() => { openPopup(false); }, 2000);
          setTimeout(() => { navigate('/profile'); }, 2000);
        })
        .catch((err) => {
          setPopupImage(imageError);
          setMessage('На запрос получена ошибка. Проверьте, пожалуйста, поля ввода и попробуйте ещё раз или обратитесь в поддержку.');
          openPopup(true);
          setTimeout(() => { openPopup(false); }, 2000);
          throw new Error(err);
        });
    }
  };

  return (
    <MainContainer>
      <main className='main add-shelter'>
        <div className='add-shelter__title-block'>
          <h2 className='add-shelter__title'>Добавить приют</h2>
          <p className='add-shelter__step'>{`шаг ${step} из 2`}</p>
        </div>
        <p className='add-shelter__subtitle'>Чтобы добавить приют, заполните, пожалуйста, данные о владельце приюта.</p>
        <form className='add-shelter-form' name='add-shelter' onSubmit={handleSubmitForm} noValidate>
          {step === 1 && (
            <OwnerStep
              currentUser={currentUser}
              setShelterOwner={setShelterOwner}
            />
          )}
          {step === 2 && (
            <ShelterStep
              handleBack={() => { setStep(1); }}
              setShelter={setShelter}
            />
          )}
        </form>
      </main>
    </MainContainer>
  );
};

export default AddShelterPage;
