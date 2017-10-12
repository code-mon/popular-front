import { combineReducers } from 'redux'
import { createReducer } from 'redux-create-reducer'
import * as actions from './actions'

const dashboardGenres = createReducer([], {
    [actions.GET_MOVIE_GENRES_START]: state => state,
    [actions.GET_MOVIE_GENRES_SUCCESS]: (state, { payload }) => payload,
    [actions.GET_MOVIE_GENRES_FAILURE]: (state, { payload }) => payload
})

const dashboardUser = createReducer(
    {},
    {
        [actions.GET_USER_INFO_START]: state => state,
        [actions.GET_USER_INFO_SUCCESS]: (state, { payload }) => payload,
        [actions.GET_USER_INFO_FAILURE]: (state, { payload }) => payload
    }
)

export default combineReducers({
    dashboardGenres,
    dashboardUser
})
