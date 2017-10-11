import { combineReducers } from 'redux'
import dashboard from 'DashboardPage'
import home from 'HomePage'
import login from 'LoginPage'
import shared from 'Shared'

export default combineReducers({
    [dashboard.constants.NAME]: dashboard.reducers,
    // [home.constansts.NAME]: home.reducers,
    // [login.constants.NAME]: login.reducers,
    auth: shared.reducers
})
