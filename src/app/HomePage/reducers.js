import * as ActionTypes from './actions';

export function movies(state = [], action) {
    switch (action.type) {
      case ActionTypes.GET_MOVIES:
        return [...state, ...movies]
      default:
        return state
    }
  }