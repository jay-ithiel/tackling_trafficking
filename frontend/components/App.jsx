import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';

// Components
import Splash from './Splash';

const App = () => (
  <div id="App">
    <Switch>
      <Route exact path='/' component={Splash}></Route>
    </Switch>
  </div>
);
