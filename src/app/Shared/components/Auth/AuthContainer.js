import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { initClient } from '../../actions'
import Auth from './Auth'

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ initClient }, dispatch)
}

const AuthContainer = connect(null, mapDispatchToProps)(Auth)
export default AuthContainer
