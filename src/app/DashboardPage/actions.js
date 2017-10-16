import axios from 'axios'
import { NAME } from './constants'

export const GET_MOVIE_GENRES_START = `${NAME}/GET_MOVIE_GENRES_START`
export const GET_MOVIE_GENRES_SUCCESS = `${NAME}/GET_MOVIE_GENRES_SUCCESS`
export const GET_MOVIE_GENRES_FAILURE = `${NAME}/GET_MOVIE_GENRES_FAILURE`

export const GET_USER_INFO_START = `${NAME}/GET_USER_INFO_START`
export const GET_USER_INFO_SUCCESS = `${NAME}/GET_USER_INFO_SUCCESS`
export const GET_USER_INFO_FAILURE = `${NAME}/GET_USER_INFO_FAILURE`

export const SET_USER_GENRES_START = `${NAME}/SET_USER_GENRES_START`

//action creators
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

const setMovieGenresStart = genres => ({
    type: SET_USER_GENRES_START,
    payload: genres
})

const setMovieGenresFail = error => ({
    type: SET_USER_GENRES_FAIL,
    payload: error
})

const setMovieGenresSuccess = message => ({
    type: SET_USER_GENRES_SUCCESS,
    payload: message
})

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

//thunk
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

export const getUserMovies = (genres) => {
    return (dispatch, genres) => {
        dispatch(getUserMoviesStart())
        return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=2ae29cc0870029d6246318d7ae859e55&with_genres=${genres.join(',')}`)
            .then((response) => {
                dispatch(getUserMoviesSuccess(response.data.genres))
            })
            .catch(error => dispatch(getUserMoviesFailure(error)))
    }
}

export const getUserInfo = userToken => {
    let url
    if (process.env.NODE_ENV === 'production') {
        // TODO need the production URL
        url = ''
    } else {
        url = 'http://localhost:3000'
    }
    return dispatch => {
        dispatch(getUserInfoStart())
        return axios.post(`${url}/user`, {id_token: userToken})
            .then(response => {
                const { movie_like, genre_like, registered, _id } = response.data.user
                dispatch(getUserInfoSuccess(movie_like, genre_like, registered, _id))
            })
            .catch(error => dispatch(getUserInfoFailure(error)))
    }
}

// export const setUserGenres = genres => {
//     return dispatch => {
//         dispatch( getMovieGenresStart(genres))
//         axios
//             .put(`sickUrl/user/?userIdGoesHere`, {
//                 genre_like: genres
//             })
//             .then((response) => {
//                 dispatch( setMovieGenresSuccess( 'i did it!' ))
//             })
//             .catch((error) => {
//                 dispatch( setMovieGenresFail(error))
//             })
//     }
// }
