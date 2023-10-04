import React, { useState } from 'react';
import './Modal.scss';
import DeclarationInput from '../../ui/DeclarationInput/DeclarationInput';
import { Button } from '../../ui';
import PrivacyCheckbox from '../PrivacyCheckbox/PrivacyCheckbox';
import EscapeIcon from '../../images/EscapeIcon/EscapeIcon';

const Modal = ({ descrText, onClose  }) => {
  const createInputState = (initialValue = '', allowText = true) => {
    const [inputState, setInputState] = useState({
      value: initialValue,
      onChange: (e) => {
        let newValue = e.target.value;
        if (!allowText) {
          newValue = newValue.replace(/\D/g, '');
        }

        setInputState((prevState) => {
          return {
            ...prevState,
            value: newValue,
            dirty: true,
            // invalidText: newValue.length >= 2 ? '' : 'Введите хотя бы 2 символа',
          };
        });
      },
      onBlur: () => {
        // Здесь можно добавить дополнительную логику, если нужно
      },
      dirty: false,
      invalidText: '',
    });

    return inputState;
  };

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  const nameInputState = createInputState();
  const phoneInputState = createInputState('', false);
  const emailInputState = createInputState();

  const handleTakeHomeButtonClick = () => {
    setIsModalOpen(false);
  };

  const isSubmitButtonEnabled = () => {
    return (
      nameInputState.value.trim() !== '' &&
      phoneInputState.value.trim() !== '' &&
      emailInputState.value.trim() !== '' &&
      isPrivacyChecked
    );
  };

  return isModalOpen && (
    <div className='modal-overlay'>
      <div className='wrapper'>
        {/* <EscapeIcon onClick={handleTakeHomeButtonClick} /> */}
        <EscapeIcon onClick={() => {
          setIsModalOpen(false);
          onClose(); // Добавьте вызов onClose, чтобы установить isApplicationSent в true при закрытии по иконке
        }} />
        <div className='modal'>
          <div className='modal__title standard-font standard-font_type_h3'>
            Оставьте заявку и приют с вами свяжется
          </div>
          <div className='modal__descr standard-font standard-font_type_small'>
            {descrText}
          </div>
          <DeclarationInput
            caption='Имя'
            inputState={nameInputState}
            type='text'
            name='name'
            required
            showError={false}
          />
          <DeclarationInput
            caption='Номер телефона'
            inputState={phoneInputState}
            type='tel'
            name='phone'
            placeholder='+7 (999) 999-99-99'
            required
            showError={false}
          />
          <DeclarationInput
            caption='E-mail'
            inputState={emailInputState}
            type='email'
            name='email'
            placeholder='email@email.com'
            required
            showError={false}
          />
          <PrivacyCheckbox
            isChecked={isPrivacyChecked}
            onChange={(isChecked) => {
              setIsPrivacyChecked(isChecked);
            }}
          />
        </div>
        <div className='btn'>
          <Button
            theme='accent'
            type='button'
            onClick={handleTakeHomeButtonClick}
            disabled={!isSubmitButtonEnabled()}
          >
            Отправить заявку
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;