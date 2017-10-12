import React from 'react'
import { connect } from 'react-redux'
import UserLinks from './UserLinks'
import { handleSignInClick, handleSignOutClick, signOut } from '../../actions'

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signInClick: () => {
            handleSignInClick()
        },
        signOutClick: () => {
            handleSignOutClick()
            dispatch(signOut())
        }
    }
}

const UserLinksContainer = connect(mapStateToProps, mapDispatchToProps)(
    UserLinks
)
export default UserLinksContainer
