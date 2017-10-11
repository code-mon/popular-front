import {
    SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_OUT
} from './constants'

const signInStart = () => {
    return {
        type: SIGN_IN_START
    }
}

const signInSuccess = user => {
    return {
        type: SIGN_IN_SUCCESS,
        user
    }
}

const signInError = error => {
    return {
        type: SIGN_IN_ERROR,
        error
    }
}

const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const initClient = () => {
    return dispatch => {
        gapi.auth2
            .init({
                client_id:
                    '637692053915-94abilb5e1bjipjmq0n139il2a83c2hg.apps.googleusercontent.com'
            })
            .then(() => {
                // listen for sign-in state changes
                gapi.auth2.getAuthInstance().isSignedIn.listen(isSignedIn => {
                    updateUser(isSignedIn, dispatch)
                })

                // handle initial sign-in state
                updateUser(
                    gapi.auth2.getAuthInstance().isSignedIn.get(),
                    dispatch
                )
            })
    }
}

const updateUser = (isSignedIn, dispatch) => {
    console.log(isSignedIn)
    if (!isSignedIn) {
        return dispatch(signOut())
    }
    getCurrentUser().then((user, error) => {
        if (error) dispatch(signInError(error))
        dispatch(signInSuccess(user))
    })
}

// function updateSignInStatus(isSignedIn, dispatch) {
//     setSignInCB(isSignedIn)
// }

function getCurrentUser() {
    return new Promise((resolve, reject) => {
        dispatch(signInStart())
        const user = gapi.auth2.getAuthInstance().currentUser.get()
        if (user) {
            resolve(user)
        } else {
            reject('User not logged in')
        }
    })
}

export const handleSignInClick = event => {
    gapi.auth2.getAuthInstance().signIn()
}

export const handleSignOutClick = event => {
    gapi.auth2.getAuthInstance().signOut()
}

// function getSignInStatus() {
//     return userSignedIn
// }
