import {
    SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_OUT
} from './constants'

const user = (state = { user: null, isSignedIn: false }, action) => {
    switch (action.type) {
        case SIGN_IN_START:
            return {
                ...state,
                isSignedIn: false
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                user: action.user,
                isSignedIn: true
            }
        case SIGN_IN_ERROR:
            return {
                ...state,
                error: action.error,
                isSignedIn: false
            }
        case SIGN_OUT:
            return {
                ...state,
                user: null,
                isSignedIn: false
            }
        default:
            return state
    }
}

export default user
