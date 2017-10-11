import { applyMiddleware, createStore, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from 'reducers'

// enables Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const configureStore = (initialState = {}) => {
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(ReduxThunk))
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
