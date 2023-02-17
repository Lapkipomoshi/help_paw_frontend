import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
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

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = React.useState(false); // пользователь вошёл в учётную запись?

  return (
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
          <Route path='vacancies' element={<ShelterVacancies />} />
        </Route>
        <Route path='/pets/:id' element={<PetPage />} />
        <Route path='/papers' element={<PapersPage />} />
        <Route path='/papers/:id' element={<PaperPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/news/:id' element={<NewPage />} />
        <Route
          path='/sign-in'
          element={
            <ProtectedRoute loggedIn={!loggedIn} component={LoginPage} />
          }
        />

        <Route
          path='/sign-up'
          element={
            <ProtectedRoute loggedIn={!loggedIn} component={RegisterPage} />
          }
        />

        <Route
          path='/password-recovery'
          element={
            <ProtectedRoute loggedIn={!loggedIn} component={PasswordRecovery} />
          }
        />

        <Route
          path='/new-password'
          element={
            <ProtectedRoute loggedIn={!loggedIn} component={NewPassword} />
          }
        />
        <Route path='/help_paw_frontend' element={<Navigate to='/' replace />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
