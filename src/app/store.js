import { applyMiddleware, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from 'reducers'

export const configureStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(ReduxThunk));
  return store;
};
