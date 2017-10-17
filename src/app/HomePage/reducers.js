import { combineReducers } from 'redux'
import * as actions from './actions'

export const userMovies = ( state={}, action ) => {
  switch( action.type ){
      case actions.SET_USER_MOVIE_START: {
          return { 
              ...state,
              isFetching: true
          }
      }
      case actions.SET_USER_MOVIE_SUCCESS: {
          return {
              ...state,
              isFetching: false,
              movies: action.payload
          }
      }
      case actions.SET_USER_MOVIE_FAILURE: {
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
    userMovies,
})