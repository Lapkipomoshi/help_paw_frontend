import React, { useState, useEffect } from 'react';
import IMask from 'imask';
import DeclarationInput from '../../../ui/DeclarationInput/DeclarationInput';
import AddPhotoBlock from '../../../ui/AddPhotoBlock/AddPhotoBlock';
import Button from '../../../ui/Button/Button';
import CheckboxesSelect from '../../../ui/CheckboxesSelect/CheckboxesSelect';
import useInput from '../../../hooks/useInput';
import * as regex from '../../../utils/regex';
import * as errorMessage from '../../../utils/errorMessage';
import PrivacyCheckbox from '../../../components/PrivacyCheckbox/PrivacyCheckbox';

// шаг в форме добавления приюта с анкетой о самом приюте
const ShelterStep = ({ handleBack, setShelter }) => {
  const sizeLimit = 5 * 1024 * 1024; // ограничение для размера картинки - 5 МБ
  const [logo, setLogo] = useState();
  const [mainPhoto, setMainPhoto] = useState();
  const startTime = useInput('', { notEmpty: true, regex: regex.TIME }, errorMessage.TIME);
  const finishTime = useInput('', { notEmpty: true, regex: regex.TIME }, errorMessage.TIME);
  const shelterName = useInput('', { notEmpty: true, maxLength: 50, regex: regex.NAME_REGEX }, errorMessage.SHELTER_NAME);
  const INN = useInput('', { notEmpty: true, minLength: 10, maxLength: 10, regex: regex.NUMBER }, errorMessage.INN);
  const webSite = useInput('', { regex: regex.URL, maxLength: 200 }, errorMessage.SHELTER_SITE);
  const telegram = useInput('', { regex: regex.TELEGRAM, maxLength: 200 }, errorMessage.TELEGRAM);
  const [animalTypes, setAnimalTypes] = useState([]);
  const address = useInput('', { notEmpty: true, maxLength: 100 }, errorMessage.ADDRESS);
  const addressPlaceHolder = 'Москва, Профсоюзная улица, 56, стр. 1, помещение 2';
  const okGroup = useInput('', { regex: regex.ODNOKLASSNIKI, maxLength: 200 }, errorMessage.ODNOKLASSNIKI);
  const vkGroup = useInput('', { regex: regex.VKONTAKTE, maxLength: 200 }, errorMessage.VKONTAKTE);
  const description = useInput('', { notEmpty: true, maxLength: 3000, regex: regex.TEXT }, errorMessage.DESCRIPTION);
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [isWarningChecked, setIsWarningChecked] = useState(false);
  const isInvalid =
    startTime.invalidText ||
    finishTime.invalidText ||
    shelterName.invalidText ||
    INN.invalidText ||
    webSite.invalidText ||
    telegram.invalidText ||
    address.invalidText ||
    okGroup.invalidText ||
    vkGroup.invalidText ||
    description.invalidText ||
    !isAgreementChecked ||
    !isWarningChecked ||
    animalTypes.length === 0;

  useEffect(() => {
    if (!isInvalid) {
      setShelter({
        logo,
        profile_image: mainPhoto,
        working_from_hour: startTime.value,
        working_to_hour: finishTime.value,
        name: shelterName.value,
        tin: INN.value,
        web_site: webSite.value,
        telegram: telegram.value,
        animal_types: animalTypes,
        address: address.value,
        ok_page: okGroup.value,
        vk_page: vkGroup.value,
        description: description.value,
      });
    }
  }, [isInvalid]);

  // добавить маску для полей времени работы приюта
  useEffect(() => {
    const maskOptions = { mask: '00:00' };
    document.querySelectorAll('.add-shelter-form__time-input').forEach((el) => {
      IMask(el, maskOptions);
    });
  }, []);

  return (
    <>
      <div className='add-shelter-form__photos'>
        <AddPhotoBlock photo={logo} setPhoto={setLogo} name='logo' sizeLimit={sizeLimit} labelText='Логотип приюта' />
        <AddPhotoBlock photo={mainPhoto} setPhoto={setMainPhoto} name='mainPhoto' sizeLimit={sizeLimit} labelText='Фото приюта' />
      </div>
      <label className='add-shelter-form__caption'>Часы приюта*</label>
      <div className='add-shelter-form__clock'>
        <input
          className={`add-shelter-form__time-input ${startTime.dirty && startTime.invalidText && 'add-shelter-form__time-input_invalid'}`}
          value={startTime.value}
          onChange={startTime.onChange}
          onBlur={startTime.onBlur}
          type='tel'
          name='startTime'
          placeholder='00:00'
          required
        />
        <p>-</p>
        <input
          className={`add-shelter-form__time-input ${finishTime.dirty && finishTime.invalidText && 'add-shelter-form__time-input_invalid'}`}
          value={finishTime.value}
          onChange={finishTime.onChange}
          onBlur={finishTime.onBlur}
          type='tel'
          name='finishTime'
          placeholder='00:00'
          required
        />
      </div>
      <p className='add-shelter-form__error'>{startTime.dirty && startTime.invalidText ? startTime.invalidText : finishTime.dirty && finishTime.invalidText}</p>
      <div className='add-shelter-form__flex'>
        <ul className='add-shelter-form__column'>
          <DeclarationInput caption='Название приюта*' inputState={shelterName} type='text' name='shelterName' required />
          <DeclarationInput caption='ИНН*' inputState={INN} type='number' name='INN' placeholder='10 цифр' required />
          <DeclarationInput caption='Ссылка на сайт приюта' inputState={webSite} type='url' name='webSite' />
          <DeclarationInput caption='Ссылка на канал приюта в &laquo;Telegram&raquo;' inputState={telegram} type='url' name='telegram' placeholder='t.me/' />
        </ul>
        <ul className='add-shelter-form__column'>
          <CheckboxesSelect caption='Виды животных*' setInputValue={setAnimalTypes} />
          <DeclarationInput caption='Адрес приюта*' inputState={address} type='text' name='address' placeholder={addressPlaceHolder} required />
          <DeclarationInput caption='Ссылка на группу приюта в &laquo;Одноклассники&raquo;' inputState={okGroup} type='url' name='okRu' placeholder='ok.ru/' />
          <DeclarationInput caption='Ссылка на группу приюта в &laquo;VK&raquo;' inputState={vkGroup} type='url' name='vk' placeholder='vk.com/' />
        </ul>
      </div>
      <label className='add-shelter-form__caption'>Описание приюта*</label>
      <textarea
        className={`add-shelter-form__textarea ${description.dirty && description.invalidText && 'add-shelter-form__textarea_invalid'}`}
        value={description.value}
        onChange={description.onChange}
        onBlur={description.onBlur}
        name='description'
        required
      />
      <p className='add-shelter-form__error'>{description.dirty && description.invalidText}</p>
      <PrivacyCheckbox onClick={setIsAgreementChecked} />
      <div className='register__privacy'>
        <label className='checkbox__container'>
          <input
            className='checkbox__input'
            name='warning'
            type='checkbox'
            onClick={() => {
              setIsWarningChecked(!isWarningChecked);
            }}
          />
          <span className='checkbox' />
        </label>
        <p className='register__text'>Я оповещён, что один пользователь может зарегистрировать только один приют</p>
      </div>
      <div className='add-shelter-form__buttons'>
        <Button disabled={isInvalid} submit>
          Добавить приют
        </Button>
        <Button theme='transparent' onClick={handleBack}>
          Назад
        </Button>
      </div>
    </>
  );
};

export default ShelterStep;
