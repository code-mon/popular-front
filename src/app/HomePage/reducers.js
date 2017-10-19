import { combineReducers } from 'redux'
import * as actions from './actions'

export const userMovies = (state = {}, action) => {
    switch (action.type) {
        case actions.SET_USER_MOVIES_START: {
            return {
                ...state,
                isFetching: true
            }
        }
        case actions.SET_USER_MOVIES_SUCCESS: {
            // can't rely on this because it is not loaded at the start of the app
            return {
                ...state,
                isFetching: false,
                movies: action.payload
            }
        }
        case actions.SET_USER_MOVIES_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        }
        default:
            return state
    }
}

export default combineReducers({
    userMovies
})
