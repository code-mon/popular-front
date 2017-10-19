import React, { Component } from 'react'

export default class Auth extends Component {
    componentDidMount() {
        const script = document.createElement('script')
        script.src = 'https://apis.google.com/js/api.js'

        script.onload = () => {
            gapi.load('auth2', () => {
                this.props.initClient()
            })
        }

        document.body.appendChild(script)
    }

    render() {
        return null
    }
}
