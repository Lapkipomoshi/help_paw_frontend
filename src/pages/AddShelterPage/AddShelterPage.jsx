import React, { useState } from 'react';
import './AddShelterPage.css';
import OwnerStep from './components/OwnerStep';
import ShelterStep from './components/ShelterStep';
import MainContainer from '../../components/MainContainer/MainContainer';
import addShelterApi from './api';

const AddShelterPage = ({ currentUser }) => {
  const [step, setStep] = useState(1);
  const [shelterOwner, setShelterOwner] = useState({});
  const [shelter, setShelter] = useState({});

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      const token = localStorage.getItem('access');
      console.log(token);
      console.log({ ...shelterOwner, ...shelter });
      addShelterApi.postShelter(token, { ...shelterOwner, ...shelter })
        .then((res) => { console.log(res); })
        .catch((err) => {
          throw new Error(err);
        });
    }
  };

  return (
    <MainContainer theme='base'>
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
