import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IMask from 'imask';
import DeclarationInput from '../../../ui/DeclarationInput/DeclarationInput';
import Button from '../../../ui/Button/Button';
import useInput from '../../../hooks/useInput';
import CheckboxesSelect from '../../../ui/CheckboxesSelect/CheckboxesSelect';
import * as regex from '../../../utils/regex';
import * as errorMessage from '../../../utils/errorMessage';

// шаг в форме добавления приюта с анкетой о самом приюте
const ShelterStep = ({ handleBack, setShelter }) => {
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
  const [isChecked, setIsChecked] = useState(false);
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
    !isChecked ||
    animalTypes.length === 0;

  const handleLogo = (e) => {
    const sizeLimit = 5 * 1024 * 1024; // ограничение для размера картинки - 5 МБ
    if (e.target.files[0].size < sizeLimit) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setLogo(fileReader.result);
      };
      fileReader.readAsDataURL(e.target.files[0]);
    } else {
      setLogo('');
    }
  };

  const handleMainPhoto = (e) => {
    const sizeLimit = 5 * 1024 * 1024; // ограничение для размера картинки - 5 МБ
    if (e.target.files[0].size < sizeLimit) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setMainPhoto(fileReader.result);
      };
      fileReader.readAsDataURL(e.target.files[0]);
    } else {
      setMainPhoto('');
    }
  };

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
        <div className='add-shelter-form__photo-block'>
          <label className='add-shelter-form__photo-label'>Логотип приюта</label>
          <div className='add-shelter-form__photo-input'>
            <label>
              <input onChange={handleLogo} type='file' name='logo' accept='.jpg, .jpeg, .png, .bmp' multiple={false} />
              <img className={`add-shelter-form__logo ${!logo && 'add-shelter-form__logo_hidden'}`} src={logo} alt='' />
            </label>
          </div>
        </div>
        <div className='add-shelter-form__photo-block'>
          <label className='add-shelter-form__photo-label'>Фото приюта</label>
          <div className='add-shelter-form__photo-input'>
            <label>
              <input onChange={handleMainPhoto} type='file' name='mainPhoto' accept='.jpg, .jpeg, .png, .bmp' multiple={false} />
              <img className={`add-shelter-form__logo ${!mainPhoto && 'add-shelter-form__logo_hidden'}`} src={logo} alt='' />
            </label>
          </div>
        </div>
      </div>
      <label className='add-shelter-form__caption'>Часы приюта*</label>
      <div className='add-shelter-form__clock'>
        <input
          className='add-shelter-form__time-input'
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
          className='add-shelter-form__time-input'
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
        className='add-shelter-form__textarea'
        value={description.value}
        onChange={description.onChange}
        onBlur={description.onBlur}
        name='description'
        required
      />
      <p className='add-shelter-form__error'>{description.dirty && description.invalidText}</p>
      <div className='register__privacy'>
        <label className='checkbox__container'>
          <input
            className='checkbox__input'
            name='agreement'
            type='checkbox'
            onClick={() => {
              setIsChecked(!isChecked);
            }}
          />
          <span className='checkbox' />
        </label>
        <p className='register__text'>
          Я согласен с
          <Link className='register__link' to='/' target='_blank'>
            {' '}
            Политикой конфиденциальности{' '}
          </Link>
          и
          <Link className='register__link' to='/' target='_blank'>
            {' '}
            Условиями использования сервиса
          </Link>
        </p>
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
