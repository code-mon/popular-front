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

const getUserInfoSuccess = (movie_like, genre_like, registered, _id) => ({
    type: GET_USER_INFO_SUCCESS,
    payload: {movies: movie_like, genres: genre_like, registered: registered, id: _id}
})

const getUserInfoFailure = error => ({
    type: GET_USER_INFO_FAILURE,
    payload: error
})

export const getUserInfo = userToken => {
    let url = config.DB_HOST
    return dispatch => {
        dispatch(getUserInfoStart())
        return axios.post(`${url}/user`, {id_token: userToken})
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
    return dispatch => {
        dispatch(getMovieGenresStart())
        return axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=2ae29cc0870029d6246318d7ae859e55')
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

const setUserGenresSuccess = genre => ({
    type: SET_USER_GENRES_SUCCESS,
    payload: genre
})

const setUserGenresFailure = error => ({
    type: SET_USER_GENRES_FAILURE,
    payload: error
})

export const setUserGenres = (id, genre) => {
    const config = {
        url: `/users/genres/${id}`,
        method: 'PUT',
        data: genre
    }
    return (dispatch) => {
        dispatch(setUserGenresStart())
        return axios.put(`/users/genres/${id}`, config)
            .then((response) => {
                console.log(response.data)
                dispatch(setUserGenresSuccess(response.data))
            })
            .catch(error => dispatch(setUserGenresFailure(error)))
    }
}

/*
** Set User Movies
*/
const setUserMoviesStart = () => ({
    type: SET_USER_GENRES_START,
})

const setUserMoviesSuccess = (genre) => ({
    type: SET_USER_GENRES_SUCCESS,
    payload: genre
})

const setUserMoviesFail = error => ({
    type: SET_USER_GENRES_FAIL,
    payload: error
})

export const setUserMovies = (id, movie) => {
    return dispatch => {
        dispatch( getUserMoviesStart(movies))
        return axios.put(`/user/${id}`, {
                movies: movie
            })
            .then((response) => {
                console.log(response)
                dispatch(setMovieGenresSuccess())
            })
            .catch((error) => {
                dispatch( setMovieGenresFail(error))
            })
    }
}










