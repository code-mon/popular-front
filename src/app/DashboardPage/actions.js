import axios from 'axios'
import { NAME } from './constants'

export const GET_MOVIE_GENRES_START = `${NAME}/GET_MOVIE_GENRES_START`
export const GET_MOVIE_GENRES_SUCCESS = `${NAME}/GET_MOVIE_GENRES_SUCCESS`
export const GET_MOVIE_GENRES_FAILURE = `${NAME}/GET_MOVIE_GENRES_FAILURE`

export const GET_USER_INFO_START = `${NAME}/GET_USER_INFO_START`
export const GET_USER_INFO_SUCCESS = `${NAME}/GET_USER_INFO_SUCCESS`
export const GET_USER_INFO_FAILURE = `${NAME}/GET_USER_INFO_FAILURE`

//action creators
export const getMovieGenresStart = () => ({
    type: GET_MOVIE_GENRES_START
})

export const getMovieGenresSuccess = genres => ({
    type: GET_MOVIE_GENRES_SUCCESS,
    payload: genres
})

export const getMovieGenresFailure = error => ({
    type: GET_MOVIE_GENRES_FAILURE,
    payload: error
})

export const getUserInfoStart = () => ({
    type: GET_USER_INFO_START
})

export const getUserInfoSuccess = info => ({
    type: GET_USER_INFO_SUCCESS,
    payload: info
})

export const getUserInfoFailure = error => ({
    type: GET_USER_INFO_FAILURE,
    payload: error
})

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
        axios
            .post(`${url}/user`, {
                id_token: userToken
            })
            .then((response, error) => {
                if (error) return dispatch(getUserInfoFailure(error))
                const user = response.data.user
                dispatch(getUserInfoSuccess(user))
            })
    }
}
