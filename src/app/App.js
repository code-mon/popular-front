import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';

import { Navbar } from 'Shared';
import { components } from 'HomePage';
import { LoginContainer } from 'LoginPage';
import { DashboardContainer } from 'DashboardPage';

import { configureStore } from 'store';
import initClient, { getSignInStatus } from 'utils/auth.js';

const style = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#000000',
  color: '#FD4034'
};

const store = configureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={components.HomeContainer} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
