import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
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
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/map">
          <MapPage />
        </Route>
        <Route exact path="/shelter-list">
          <ShelterListPage /> 
        </Route>
        <Route exact path="/shelter">
          <ShelterPage /> 
        </Route>
        <Route exact path="/papers">
          <PapersPage /> 
        </Route>
        <Route exact path="/paper">
          <PaperPage /> 
        </Route>
        <Route exact path="/news">
          <NewsPage /> 
        </Route>
        <Route exact path="/new">
          <NewPage /> 
        </Route>
        <ProtectedRoute
          exact path="/sign-in"
          loggedIn={!loggedIn}
          component={LoginPage} />
        <ProtectedRoute
          exact path="/sign-up"
          loggedIn={!loggedIn}
          component={RegisterPage} />
        <Route path="/">
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
