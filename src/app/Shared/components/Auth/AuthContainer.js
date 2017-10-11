import React from 'react'
import { connect } from 'react-redux'
import Auth from './Auth'

const AuthContainer = connect()(Auth)
export default AuthContainer
