import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Main from '../../pages/Main/Main';

const App = (props) => {
  const [loggedIn, setLoggedIn] = React.useState(false); // пользователь вошёл в учётную запись?

  return (
    <div className="page">
      <Header
        loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/">
          <Main
            loggedIn={loggedIn} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
