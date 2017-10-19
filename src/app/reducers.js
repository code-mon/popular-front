import { combineReducers } from 'redux'
import dashboard from 'DashboardPage'
import home from 'HomePage'
import login from 'LoginPage'
import user from './Shared/reducers'

export default combineReducers({
    [dashboard.constants.NAME]: dashboard.reducers,
    [home.constants.NAME]: home.reducers,
    // [login.constants.NAME]: login.reducers,
    user
})
