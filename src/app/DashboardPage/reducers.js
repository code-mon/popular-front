import { combineReducers } from 'redux'
import * as actions from './actions'

const initialDashboardGenreState = {
    error: '',
    genres: [],
    isFetching: false
}

export const dashboardGenres = (state = initialDashboardGenreState, action) => {
    switch (action.type) {
        case actions.GET_MOVIE_GENRES_START: {
            return {
                ...state,
                isFetching: true
            }
        }
        case actions.GET_MOVIE_GENRES_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                genres: action.payload
            }
        }
        case actions.GET_MOVIE_GENRES_FAILURE: {
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

const initialDashboardUserState = {
    error: '',
    genres: [],
    movies: [],
    isFetching: false
}

export const dashboardUser = (state = initialDashboardUserState, action) => {
    switch (action.type) {
        case actions.GET_USER_INFO_START: {
            return {
                ...state
            }
        }
        case actions.GET_USER_INFO_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }
        case actions.GET_USER_INFO_FAILURE: {
            return {
                ...state,
                error: action.payload
            }
        }
        case 'home/SET_USER_MOVIES_SUCCESS': {
            // need to update the movies when a user favorites or deletes a movie
            return {
                ...state,
                movies: action.payload
            }
        }
        default:
            return state
    }
}

export default combineReducers({
    dashboardGenres,
    dashboardUser
})
