import React, { useEffect, useState } from 'react';
import './AddShelterPage.css';
import StepMain from './components/StepMain';
import StepAdditional from './components/StepAdditional';
import MainContainer from '../../components/MainContainer/MainContainer';

const AddShelterPage = ({ currentUser }) => {
  const [step, setStep] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [logo, setLogo] = useState();

  const handleChangeCheckbox = () => { setIsChecked(!isChecked); };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      console.log('отправить форму');
    }
  };

  const handleLogo = (e) => {
    const { target } = e;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setLogo(fileReader.result);
    };
    fileReader.readAsDataURL(target.files[0]);
  };

  useEffect(() => {
    console.log(currentUser);
  }, []);

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
            <StepMain />
          )}
          {step === 2 && (
            <StepAdditional
              handleChangeCheckbox={handleChangeCheckbox}
              logo={logo}
              handleLogo={handleLogo}
              handleBack={() => { setStep(1); }}
            />
          )}
        </form>
      </main>
    </MainContainer>
  );
};

export default AddShelterPage;
