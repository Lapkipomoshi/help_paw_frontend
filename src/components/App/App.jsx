import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Main from '../Main/Main';

const App = (props) => {
  const [loggedIn, setLoggedIn] = React.useState(false); // пользователь вошёл в учётную запись?

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main
            loggedIn={loggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
