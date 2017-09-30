import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar.js';
import { StyleRoot } from 'radium';
import HomeContainer from './HomePage/HomeContainer'
import LoginContainer from './LoginPage/LoginContainer'
import RegisterContainer from './RegisterPage/RegisterContainer'
import DashboardContainer from './DashboardPage/DashboardContainer'

const style = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#000000',
    color: '#FD4034',
    overflowY: 'auto'
};

const App = () => {
    return (
        <StyleRoot style={{ height: '100%' }}>
            <Router>
                <div>
                    <Route path='/' component={Navbar} />
                    <Route exact path='/' component={HomeContainer} />
                    <Route path='/login' component={LoginContainer} />
                    <Route path='/register' component={RegisterContainer} />
                    <Route path='/dashboard' component={DashboardContainer} />
                </div>
            </Router>
        </StyleRoot>
    );
};

export default App;
