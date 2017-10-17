import axios from 'axios'
import { NAME } from './constants'
import config from 'config'

export const SET_USER_MOVIES_START = `${NAME}/SET_USER_MOVIES_START`
export const SET_USER_MOVIES_SUCCESS = `${NAME}/SET_USER_MOVIES_SUCCESS`
export const SET_USER_MOVIES_FAILURE = `${NAME}/SET_USER_MOVIES_FAILURE`

/*
** Set User Movies
*/
const setUserMoviesStart = () => ({
    type: SET_USER_MOVIES_START,
})

const setUserMoviesSuccess = movies => ({
    type: SET_USER_MOVIES_SUCCESS,
    payload: movies
})

const setUserMoviesFail = error => ({
    type: SET_USER_MOVIES_FAIL,
    payload: error
})

export const setUserMovies = (id, movie) => {
    const config = {
        url: `/users/movies/${id}`,
        method: 'PUT',
        data: movie
    }
    return dispatch => {
        dispatch(getUserMoviesStart())
        return axios(config)
            .then((response) => {
                const { movies } = response.data.user
                dispatch(setUserMoviesSuccess(movies))
            })
            .catch((error) => {
                dispatch(setUserMoviesFail(error))
            })
    }
}










