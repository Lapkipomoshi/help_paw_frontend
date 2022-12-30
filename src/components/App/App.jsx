import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainPage from '../../pages/MainPage/MainPage';
import MapPage from '../../pages/MapPage';
import ShelterListPage from '../../pages/ShelterListPage/ShelterListPage';
import ShelterPage from '../../pages/ShelterPage/ShelterPage';
import PapersPage from '../../pages/PapersPage/PapersPage';
import PaperPage from '../../pages/PaperPage/PaperPage';
import NewsPage from '../../pages/NewsPage/NewsPage';
import NewPage from '../../pages/NewPage/NewPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import './App.css';

const App = (props) => {
  const [loggedIn, setLoggedIn] = React.useState(false); // пользователь вошёл в учётную запись?

  return (
    <div className="page">
      <Header
        loggedIn={loggedIn} />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/map" element={<MapPage />} />
        <Route exact path="/shelter-list" element={<ShelterListPage />} />
        <Route exact path="/shelter" element={<ShelterPage />} />
        <Route exact path="/papers" element={<PapersPage />} />
        <Route exact path="/paper" element={<PaperPage />} />
        <Route exact path="/news" element={<NewsPage />} />
        <Route exact path="/new" element={<NewPage />} />
        <Route exact path="/sign-in" element={
            !loggedIn ? <LoginPage /> : <div />
          } />
        <Route exact path="/sign-up" element={
            !loggedIn ? <RegisterPage /> : <div />
          } />
        <Route path="/" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
