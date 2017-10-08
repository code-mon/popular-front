import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Navbar from './Navbar.js';
import HomeContainer from './HomePage/HomeContainer';
import LoginContainer from './LoginPage/LoginContainer';
import DashboardContainer from './DashboardPage/DashboardContainer';

import initClient, { getSignInStatus } from '../utils/auth.js';
import { getMovieGenres } from '../../utils/api.js';

const style = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#000000',
  color: '#FD4034'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null, isSignedIn: false, genres: [] };

    this.setSignInStatus = this.setSignInStatus.bind(this);
    this.setUser = this.setUser.bind(this);
    this.configureAuth = this.configureAuth.bind(this);
    this.getGenres = this.getGenres.bind(this);
  }

  componentDidMount() {
    this.getGenres();
  }

  getGenres() {
    getMovieGenres(axios.get)
      .then(response => {
        console.log(response);
      })
  }

  setSignInStatus(isSignedIn) {
    this.setState({
      isSignedIn
    });
  }

  setUser(user) {
    this.setState({
      user
    });
  }

  componentDidMount() {
    this.configureAuth();
  }

  configureAuth() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';

    script.onload = () => {
      gapi.load('auth2', () => {
        initClient(this.setSignInStatus, this.setUser);
      });
    };

    document.body.appendChild(script);
  }

  render() {
    const { isSignedIn, user } = this.state;
    return (
      <Router>
        <div>
          <Route
            path="/"
            render={() => <Navbar isSignedIn={isSignedIn} user={user} />}
          />
          <Route exact path="/" component={HomeContainer} />
<<<<<<< HEAD:src/app/App.js
          <Route path="/login" component={LoginContainer} />
=======
          <Route
            path="/login"
            render={() => {
              return this.state.isSignedIn ? (
                <Redirect to="/" />
              ) : (
                <LoginContainer />
              );
            }}
          />
>>>>>>> master:src/components/App.js
          <Route path="/dashboard" component={DashboardContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
