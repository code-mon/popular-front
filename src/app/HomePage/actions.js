import axios from 'axios'
import { NAME } from './constants'
import config from '../config'

export const SET_USER_MOVIES_START = `${NAME}/SET_USER_MOVIES_START`
export const SET_USER_MOVIES_SUCCESS = `${NAME}/SET_USER_MOVIES_SUCCESS`
export const SET_USER_MOVIES_FAILURE = `${NAME}/SET_USER_MOVIES_FAILURE`

/*
** Set User Movies
*/
const setUserMoviesStart = () => ({
    type: SET_USER_MOVIES_START
})

const setUserMoviesSuccess = movies => ({
    type: SET_USER_MOVIES_SUCCESS,
    payload: movies
})

const setUserMoviesFail = error => ({
    type: SET_USER_MOVIES_FAILURE,
    payload: error
})

export const setUserMovies = (id, movie, isFavorite) => {
    const axiosConfig = {
        url: `${config.DB_HOST}/user/movies/${id}`,
        method: isFavorite ? 'DELETE' : 'PUT',
        data: { movie }
    }
    return dispatch => {
        dispatch(setUserMoviesStart())
        return axios(axiosConfig)
            .then((response, error) => {
                console.log(response)
                if (error) return dispatch(setUserMoviesFail(error))
                const { movies } = response.data
                dispatch(setUserMoviesSuccess(movies))
            })
            .catch(error => {
                console.log(error)
                dispatch(setUserMoviesFail(error))
            })
    }
}
