import React, { useEffect, useState } from 'react';
import {
  Navigate, Route, Routes, useNavigate,
} from 'react-router-dom';
import './App.css';
import ProtectedRoute from '../ProtectedRoute';
import Header from '../../modules/Header/Header';
import Footer from '../../modules/Footer/Footer';
import MainPage from '../../pages/MainPage/MainPage';
import MapPage from '../../pages/MapPage/MapPage';

import SheltersListPage from '../../pages/SheltersListPage/SheltersListPage';
import RedShelters from '../../modules/RedShelters/RedShelters';
import YellowShelters from '../../modules/YellowShelters/YellowShelters';
import GreenShelters from '../../modules/GreenShelters/GreenShelters';

import ShelterPage from '../../pages/ShelterPage/ShelterPage';
import AboutShelter from '../../modules/AboutShelter/AboutShelter';
import HelpToShelter from '../../modules/HelpToShelter/HelpToShelter';
import ShelterNews from '../../modules/ShelterNews/ShelterNews';
import ShelterPets from '../../modules/ShelterPets/ShelterPets';
import ShelterSamePets from '../../modules/ShelterSamePets/ShelterSamePets';
import ShelterVacancies from '../../modules/ShelterVacancies/ShelterVacancies';

import PetPage from '../../pages/PetPage/PetPage';
import PapersPage from '../../pages/PapersPage/PapersPage';
import PaperPage from '../../pages/PaperPage/PaperPage';
import NewsPage from '../../pages/NewsPage/NewsPage';
import NewPage from '../../pages/NewPage/NewPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import PasswordRecovery from '../../pages/PasswordRecovery/PasswordRecovery';
import NewPassword from '../../pages/NewPassword/NewPassword';
import SignUpConfirm from '../../pages/SignUpConfirm/SignUpConfirm';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import * as auth from '../../utils/auth';
import imageSuccess from '../../images/icons/ic_success.svg';
import imageError from '../../images/icons/ic_error.svg';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import * as userApi from '../../utils/userApi';
import { register } from '../../utils/auth';
import EditProfilePage from '../../pages/EditProfilePage/EditProfilePage';
import SignOutPage from '../../pages/SignOutPage/SignOutPage';
import ChangePasswordPage from '../../pages/ChangePasswordPage/ChangePasswordPage';
import ActivateUserPage from '../../pages/ActivateUserPage/ActivateUserPage';

const App = () => {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false); // пользователь вошёл в учётную запись?
  const [currentUser, setCurrentUser] = useState({
    username: '',
    email: '',
    id: '',
  });

  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [infoTooltipImage, setInfoTooltipImage] = useState(imageSuccess);
  const [message, setMessage] = useState('');

  function closeInfoTooltip() {
    setInfoTooltipOpen(false);
  }

  const handleSignOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({ username: '', email: '', id: '' });
    navigate('/');
  };

  function tokenCheck() {
    const token = localStorage.getItem('access');
    if (token) {
      userApi.getUserInfo(token)
        .then((res) => {
          setCurrentUser(res);
          setLoggedIn(true);
        })
        .catch(() => {
          setLoggedIn(false);
          handleSignOut();
        });
    }
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  const handleRegister = ({ username, password, email }) => {
    register(username, password, email)
      .then(() => {
        setInfoTooltipImage(imageSuccess);
        setMessage('Спасибо за регистрацию! Для активации аккаунта перейдите по ссылке, отправленной на вашу почту.');
        setInfoTooltipOpen(true);
        setTimeout(closeInfoTooltip, 2000);
        setTimeout(() => { navigate('/'); }, 2000);
      })
      .catch(() => {
        setInfoTooltipImage(imageError);
        setMessage('Что-то пошло не так! Попробуйте ещё раз.');
        setInfoTooltipOpen(true);
        setTimeout(closeInfoTooltip, 2000);
      });
  };

  const handleLogin = ({ password, email }) => {
    auth.login({ password, email })
      .then((res) => {
        setLoggedIn(true);
        localStorage.setItem('access', res.access);
        localStorage.setItem('refresh', res.refresh);
        tokenCheck();

        setInfoTooltipImage(imageSuccess);
        setMessage('Добро пожаловать на сайт!');
        setInfoTooltipOpen(true);
        setTimeout(closeInfoTooltip, 2000);
        setTimeout(() => { navigate('/profile'); }, 2000);
      })
      .catch(() => {
        setInfoTooltipImage(imageError);
        setMessage('Вы ввели неверный e-mail или пароль!');
        setInfoTooltipOpen(true);
        setTimeout(closeInfoTooltip, 2000);
      });
  };

  function handleUpdateUser({ username, email }) {
    userApi.updateUserInfo({ username, email })
      .then((res) => {
        setCurrentUser({
          username: res.username,
          email: res.email,
        });

        setInfoTooltipImage(imageSuccess);
        setMessage('Вы успешно изменили данные!');
        setInfoTooltipOpen(true);
        setTimeout(closeInfoTooltip, 2000);
      })
      .catch(() => {
        setInfoTooltipImage(imageError);
        setMessage('Что-то пошло не так! Попробуйте ещё раз.');
        setInfoTooltipOpen(true);
        setTimeout(closeInfoTooltip, 2000);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header
          loggedIn={loggedIn}
        />
        <Routes>
          <Route path='/' element={<MainPage loggedIn={loggedIn} />} />
          <Route path='/shelters' element={<MapPage />} />
          <Route path='/shelters/list' element={<SheltersListPage />}>
            <Route path='red' element={<RedShelters />} />
            <Route path='yellow' element={<YellowShelters />} />
            <Route path='green' element={<GreenShelters />} />
          </Route>
          <Route path='/shelters/:id' element={<ShelterPage />}>
            <Route path='about' element={<AboutShelter />} />
            <Route path='how-to-help' element={<HelpToShelter />} />
            <Route path='news' element={<ShelterNews />} />
            <Route path='pets' element={<ShelterPets />} />
            <Route path='pets/:type' element={<ShelterSamePets />} />
            <Route path='vacancies' element={<ShelterVacancies />} />
          </Route>
          <Route path='/pets/:id' element={<PetPage />} />
          <Route path='/papers' element={<PapersPage />} />
          <Route path='/papers/:id' element={<PaperPage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/news/:id' element={<NewPage />} />

          <Route exact path='/sign-in' element={loggedIn ? <Navigate to='/' /> : <LoginPage onLogin={handleLogin} />} />

          <Route exact path='/sign-up' element={loggedIn ? <Navigate to='/' /> : <RegisterPage onRegister={handleRegister} />} />

          <Route exact path='/sign-up/confirm' element={loggedIn ? <Navigate to='/' /> : <SignUpConfirm />} />

          <Route exact path='/password-recovery' element={loggedIn ? <Navigate to='/' /> : <PasswordRecovery />} />

          <Route exact path='/password-reset/:uid/:token/' element={<NewPassword />} />

          <Route exact path='/activate/:uid/:token/' element={<ActivateUserPage />} />

          <Route
            path='/profile'
            element={
              <ProtectedRoute loggedIn={loggedIn} component={ProfilePage} />
            }
          />

          <Route
            path='/profile/edit'
            element={
              // eslint-disable-next-line react/jsx-no-bind
              <ProtectedRoute loggedIn={loggedIn} component={EditProfilePage} onEditProfile={handleUpdateUser} />
            }
          />

          <Route
            path='/profile/sign-out'
            element={
              <ProtectedRoute loggedIn={loggedIn} component={SignOutPage} onSignOut={handleSignOut} />
            }
          />

          <Route
            path='/profile/edit/password'
            element={
              <ProtectedRoute loggedIn={loggedIn} component={ChangePasswordPage} />
            }
          />

          <Route path='/help_paw_frontend' element={<Navigate to='/' replace />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />

        <InfoTooltip
          isOpen={infoTooltipOpen}
          image={infoTooltipImage}
          message={message}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
