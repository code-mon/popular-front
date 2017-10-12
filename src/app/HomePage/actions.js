import { NAME } from './constants'

export const GET_MOVIES_START = `${NAME}/GET_MOVIES_START`

export const getMovies = movies => ({
    type: GET_MOVIES_START,
    payload: movies
})

// export const getMoviesThunk = page => {
//     return dispatch => {
//         fetch(api).then(data => {
//             dispatch(getMovies(data))
//         })
//     }
// }
