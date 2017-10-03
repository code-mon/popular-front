import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar.js';
import HomeContainer from './HomePage/HomeContainer';
import LoginContainer from './LoginPage/LoginContainer';
import RegisterContainer from './RegisterPage/RegisterContainer';
import DashboardContainer from './DashboardPage/DashboardContainer';

const style = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#000000',
  color: '#FD4034'
};

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={HomeContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
        <Route path="/dashboard" component={DashboardContainer} />
      </div>
    </Router>
  );
};

export default App;
