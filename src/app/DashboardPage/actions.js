import axios from 'axios'
import { NAME } from './constants'
import config from 'config'

export const GET_USER_INFO_START = `${NAME}/GET_USER_INFO_START`
export const GET_USER_INFO_SUCCESS = `${NAME}/GET_USER_INFO_SUCCESS`
export const GET_USER_INFO_FAILURE = `${NAME}/GET_USER_INFO_FAILURE`

export const GET_MOVIE_GENRES_START = `${NAME}/GET_MOVIE_GENRES_START`
export const GET_MOVIE_GENRES_SUCCESS = `${NAME}/GET_MOVIE_GENRES_SUCCESS`
export const GET_MOVIE_GENRES_FAILURE = `${NAME}/GET_MOVIE_GENRES_FAILURE`

export const SET_USER_MOVIES_START = `${NAME}/SET_USER_MOVIES_START`
export const SET_USER_MOVIES_SUCCESS = `${NAME}/SET_USER_MOVIES_SUCCESS`
export const SET_USER_MOVIES_FAILURE = `${NAME}/SET_USER_MOVIES_FAILURE`

export const SET_USER_GENRES_START = `${NAME}/SET_USER_GENRES_START`
export const SET_USER_GENRES_SUCCESS = `${NAME}/SET_USER_GENRES_SUCCESS`
export const SET_USER_GENRES_FAILURE = `${NAME}/SET_USER_GENRES_FAILURE`


/*
** Get User info from DB
*/
const getUserInfoStart = () => ({
    type: GET_USER_INFO_START
})

const getUserInfoSuccess = (movies, genres, registered, _id) => ({
    type: GET_USER_INFO_SUCCESS,
    payload: {movies: movies, genres: genres, registered: registered, id: _id}
})

const getUserInfoFailure = error => ({
    type: GET_USER_INFO_FAILURE,
    payload: error
})

export const getUserInfo = userToken => {
    const options = {
        url: `${config.DB_HOST}/user`,
        method: 'POST',
        data: {
            id_token: userToken
        }
    }
    return dispatch => {
        dispatch(getUserInfoStart())
        return axios(options)
            .then(response => {
                const { movies, genres, registered, _id } = response.data.user
                dispatch(getUserInfoSuccess(movies, genres, registered, _id))
            })
            .catch(error => dispatch(getUserInfoFailure(error)))
    }
}

/*
** Get Movie Genres from TMDB
*/
const getMovieGenresStart = () => ({
    type: GET_MOVIE_GENRES_START,
})

const getMovieGenresSuccess = genres => ({
    type: GET_MOVIE_GENRES_SUCCESS,
    payload: genres
})

const getMovieGenresFailure = error => ({
    type: GET_MOVIE_GENRES_FAILURE,
    payload: error
})

export const getMovieGenres = () => {
    const options = {
        url: 'https://api.themoviedb.org/3/genre/movie/list',
        params: {api_key: config.API_KEY},
        method: 'GET'
    }
    return dispatch => {
        dispatch(getMovieGenresStart())
        return axios(options)
            .then((response) => {
                dispatch(getMovieGenresSuccess(response.data.genres))
            })
            .catch(error => dispatch(getMovieGenresFailure(error)))
    }
}

/*
** Set User Genres
*/
const setUserGenresStart = () => ({
    type: SET_USER_GENRES_START,
})

const setUserGenresSuccess = message => ({
    type: SET_USER_GENRES_SUCCESS,
    payload: message
})

const setUserGenresFailure = error => ({
    type: SET_USER_GENRES_FAILURE,
    payload: error
})

export const setUserGenres = (id, genre) => {
    const options = {
        url: `/users/genres/${id}`,
        method: 'PUT',
        data: genre
    }
    return (dispatch) => {
        dispatch(setUserGenresStart())
        return axios(options)
            .then(() => {
                dispatch(setUserGenresSuccess('Genre Successfully Added'))
            })
            .catch(error => dispatch(setUserGenresFailure(error)))
    }
}

/*
** Set User Movies
*/
const setUserMoviesStart = () => ({
    type: SET_USER_MOVIES_START,
})

const setUserMoviesSuccess = message => ({
    type: SET_USER_MOVIES_SUCCESS,
    payload: message
})

const setUserMoviesFail = error => ({
    type: SET_USER_MOVIES_FAILURE,
    payload: error
})

export const setUserMovies = (id, movie) => {

    const options = {
        url: `${config.DB_HOST}/user/movies/${id}`,
        method: 'PUT',
        data: movie
    }

    return dispatch => {
        dispatch(setUserMoviesStart())
        console.log(options)
        axios(options)
            .then(() => {
                dispatch(setUserMoviesSuccess('Movie Successfully Added'))
            })
            .catch((error) => {
                dispatch(setUserMoviesFail(error))
            })
    }
}










