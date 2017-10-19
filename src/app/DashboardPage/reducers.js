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
    isFetching: false,
    message: ''
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
        case actions.SET_USER_MOVIES_START: {
            return {
                ...state
            }
        }
        case actions.SET_USER_MOVIES_SUCCESS: {
            return {
                ...state,
                message: action.payload
            }
        }
        case actions.SET_USER_MOVIES_FAILURE: {
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

        case actions.SET_USER_GENRES_STATE: {
            return {
                ...state,
                genres: [ ...state.genres, action.payload ]
            }
        }

        case actions.REMOVE_USER_GENRE_STATE: {
            return {
                ...state,
                genres: [ ...state.genres.filter( genre => action.payload !== genre ) ]
            }
        }

        case actions.SET_USER_GENRES_SUCCESS: {
            return state;
        }

        case actions.SET_USER_GENRES_FAILURE: {
            return state;
        }

        default:
            return state
    }
}

export default combineReducers({
    dashboardGenres,
    dashboardUser
})
