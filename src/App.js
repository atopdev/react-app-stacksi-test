import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from 'common/history';
import SignUp from 'pages/SignUp';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
