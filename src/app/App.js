import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { Provider } from 'react-redux'

// imports components as an object from each folder
import Shared from 'Shared'
import HomePage from 'HomePage'
import LoginPage from 'LoginPage'
import DashboardPage from 'DashboardPage'

import { configureStore } from 'store'
import initClient, { getSignInStatus } from 'utils/auth.js'

// object destructuring to get the component we want
const { DashboardContainer } = DashboardPage.components
const { HomeContainer } = HomePage.components
const { LoginContainer } = LoginPage.components
const { Navbar } = Shared.components

const store = configureStore()

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route path="/" component={Navbar} />
                        <Route exact path="/" component={HomeContainer} />
                        <Route path="/login" component={LoginContainer} />
                        <Route
                            path="/dashboard"
                            component={DashboardContainer}
                        />
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App
