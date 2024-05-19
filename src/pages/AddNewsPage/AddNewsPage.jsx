import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddNewsPage.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import DeclarationInput from '../../ui/DeclarationInput/DeclarationInput';
import useInput from '../../hooks/useInput';
import * as regex from '../../utils/regex';
import * as errorMessage from '../../utils/errorMessage';
import DeclarationTextarea from '../../ui/DeclarationTextarea/DeclarationTextarea';
import PrivacyCheckbox from '../../components/PrivacyCheckbox/PrivacyCheckbox';
import { Button } from '../../ui';
import AddPhotoBlock from '../../ui/AddPhotoBlock/AddPhotoBlock';

import imageSuccess from '../../images/icons/ic_success.svg';
import imageError from '../../images/icons/ic_error.svg';
import addArticleApi from './api';

const AddNewsPage = ({
  openInfoPopup,
  setInfoPopupImage,
  setMessageInfoPopup,
  setConfirmPopupOpen,
  setQuestion,
  setDescription,
  setConfirmBtnText,
  setRejectBtnText,
  setIconBasket,
}) => {
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [canSend, setCanSend] = useState(false);
  const [newImage, setNewImage] = useState();
  const [preImage, setPreImage] = useState();
  const [gallery, setGallery] = useState([]);
  const [article, setArticle] = useState({});
  const sizeLimit = 5 * 1024 * 1024;
  const navigate = useNavigate();

  const newsTitle = useInput('', {
    notEmpty: true, maxLength: 100, regex: regex.TEXT,
  }, errorMessage.NEWS_NAME, false);

  const newsBody = useInput('', {
    notEmpty: true, maxLength: 15000, regex: regex.TEXT,
  }, errorMessage.NEWS_TEXT, false);

  const handleReject = () => {
    setIconBasket(false);
    setQuestion('Вы уверены, что хотите вернуться назад?');
    setDescription('Внесенные данные не будут сохранены.');
    setConfirmBtnText('Вернуться');
    setRejectBtnText('Остаться');
    setConfirmPopupOpen(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const token = localStorage.getItem('access');
    addArticleApi
      .postArticle(token, { ...article })
      .then(() => {
        setInfoPopupImage(imageSuccess);
        setMessageInfoPopup('Заявка на добавление приюта успешно добавлена! Её состояние можно отслеживать в личном кабинете.');
        openInfoPopup(true);
        setTimeout(() => {
          openInfoPopup(false);
          navigate(-1);
        }, 3000);
      })
      .catch((error) => {
        setInfoPopupImage(imageError);
        setMessageInfoPopup('На запрос получена ошибка. Проверьте, пожалуйста, поля ввода и попробуйте ещё раз или обратитесь в поддержку.');
        openInfoPopup(true);
        setTimeout(() => {
          openInfoPopup(false);
        }, 3000);
        throw new Error(error);
      });
  };

  useEffect(() => {
    if (newImage && newImage !== preImage && gallery.length < 5) {
      setGallery([...gallery, { image: newImage }]);
      setPreImage(newImage);
    }
    if (isAgreementChecked && !newsTitle.invalidText && !newsBody.invalidText && preImage) {
      setArticle({
        profile_image: gallery[0].image,
        gallery: [...gallery],
        header: newsTitle.value,
        text: newsBody.value
      });
      setCanSend(true);
    } else {
      setCanSend(false);
    }
  }, [isAgreementChecked, newsTitle.value, newsBody.value, newImage]);
  return (
    <MainContainer>
      <main className='main'>
        <section className='add-news'>
          <h2 className='add-news__title'>Предложить новость</h2>
          <form className='add-news__form' onSubmit={handleSubmitForm}>
            <div className='add-news__form-photo'>
              <AddPhotoBlock
                photo={newImage}
                setPhoto={setNewImage}
                labelText='Фото новости'
                name='news_photo'
                sizeLimit={sizeLimit} />
              <span className='add-news__form-photo-count'>{gallery.length}/5</span>
            </div>
            <div className='add-news__form-heading'>
              <DeclarationInput
                type='text'
                caption='Заголовок*'
                name='news_title'
                placeholder='В приюте Бирюлево побывали школьники'
                required
                inputState={newsTitle}
              />
            </div>
            <div className='add-news__form-body'>
              <DeclarationTextarea
                caption='Описание новости*'
                name='news_text'
                placeholder='Предложить текст новости'
                required
                inputState={newsBody}
                textCols={30}
                textRows={20}
              />
            </div>
            <PrivacyCheckbox
              type='checkbox'
              onChange={() => {
                setIsAgreementChecked(!isAgreementChecked);
              }} />
            <div className='add-news__form-buttons'>
              <Button
                disabled={!canSend}
                submit='submit'
              >
                Предложить новость
              </Button>
              <Button theme='transparent' onClick={handleReject}>
                Отменить
              </Button>
            </div>
          </form>
        </section>
      </main>
    </MainContainer >
  );
};

export default AddNewsPage;
