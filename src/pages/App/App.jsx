import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import ProtectedRoute from '../../components/ProtectedRoute';
import Header from '../../modules/Header/Header';
import Footer from '../../modules/Footer/Footer';
import MainPage from '../MainPage/MainPage';
import MapPage from '../MapPage/MapPage';
import SheltersListPage from '../SheltersListPage/SheltersListPage';
import ShelterPage from '../ShelterPage/ShelterPage';
import * as shelterModules from '../ShelterPage/modules';
import PetPage from '../PetPage/PetPage';
import AddShelterPage from '../AddShelterPage/AddShelterPage';
import PapersPage from '../PapersPage/PapersPage';
import PaperPage from '../PaperPage/PaperPage';
import NewsPage from '../NewsPage/NewsPage';
import NewPage from '../NewPage/NewPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import PasswordRecovery from '../PasswordRecovery/PasswordRecovery';
import NewPassword from '../NewPassword/NewPassword';
import SignUpConfirm from '../SignUpConfirm/SignUpConfirm';
import ProfilePage from '../ProfilePage/ProfilePage';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import * as auth from './api/auth';
import imageSuccess from '../../images/icons/ic_success.svg';
import imageError from '../../images/icons/ic_error.svg';
import InfoTooltip from '../../components/InfoTooltip/InfoTooltip';
import * as userApi from './api/userApi';
import { register } from './api/auth';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import SignOutPage from '../SignOutPage/SignOutPage';
import ChangePasswordPage from '../ChangePasswordPage/ChangePasswordPage';
import ActivateUserPage from '../ActivateUserPage/ActivateUserPage';

const App = () => {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false); // пользователь вошёл в учётную запись?
  const [currentUser, setCurrentUser] = useState({
    username: '',
    email: '',
    id: '',
  });

  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [infoTooltipImage, setInfoTooltipImage] = useState(null);
  const [message, setMessage] = useState('');

  function closeInfoTooltip() {
    setInfoTooltipOpen(false);
    setInfoTooltipImage(null);
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
      userApi
        .getUserInfo(token)
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
        setTimeout(() => {
          navigate('/');
        }, 2000);
      })
      .catch((res) => {
        setInfoTooltipImage(imageError);
        if (res.status === 400) {
          setMessage('Пользователь с таким e-mail уже зарегистрирован.');
        } else {
          setMessage('Что-то пошло не так! Попробуйте ещё раз.');
        }
        setInfoTooltipOpen(true);
        setTimeout(closeInfoTooltip, 2000);
      });
  };

  const handleLogin = ({ password, email }) => {
    auth
      .login({ password, email })
      .then((res) => {
        setLoggedIn(true);
        localStorage.setItem('access', res.access);
        localStorage.setItem('refresh', res.refresh);
        tokenCheck();

        setInfoTooltipImage(imageSuccess);
        setMessage('Добро пожаловать на сайт!');
        setInfoTooltipOpen(true);
        setTimeout(closeInfoTooltip, 2000);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      })
      .catch(() => {
        setInfoTooltipImage(imageError);
        setMessage('Вы ввели неверный e-mail или пароль!');
        setInfoTooltipOpen(true);
        setTimeout(closeInfoTooltip, 2000);
      });
  };

  const handleUpdateUser = ({ username, email }) => {
    userApi
      .updateUserInfo({ username, email })
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
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/shelters'>
            <Route index element={<MapPage />} />
            <Route path='list' element={<Navigate to='/shelters/list/red' replace />} />
            <Route path='list/:color' element={<SheltersListPage />} />
            <Route path=':id' element={<ShelterPage />}>
              <Route path='about' element={<shelterModules.AboutShelter />} />
              <Route path='how-to-help' element={<shelterModules.HelpToShelter />} />
              <Route path='news' element={<shelterModules.ShelterNews />} />
              <Route path='pets' element={<shelterModules.ShelterPets />} />
              <Route path='pets/:type' element={<shelterModules.ShelterSamePets />} />
              <Route path='vacancies' element={<shelterModules.ShelterVacancies />} />
            </Route>
          </Route>

          <Route
            path='/add-shelter'
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                component={AddShelterPage}
                currentUser={currentUser}
                openPopup={setInfoTooltipOpen}
                setPopupImage={setInfoTooltipImage}
                setMessage={setMessage}
              />
            }
          />
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

          <Route path='/profile' element={<ProtectedRoute loggedIn={loggedIn} component={ProfilePage} />} />

          <Route path='/profile/edit' element={<ProtectedRoute loggedIn={loggedIn} component={EditProfilePage} onEditProfile={handleUpdateUser} />} />

          <Route path='/profile/sign-out' element={<ProtectedRoute loggedIn={loggedIn} component={SignOutPage} onSignOut={handleSignOut} />} />

          <Route path='/profile/edit/password' element={<ProtectedRoute loggedIn={loggedIn} component={ChangePasswordPage} />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />

        <InfoTooltip isOpen={infoTooltipOpen} image={infoTooltipImage} message={message} />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
