import React, { Component } from 'react'

// Style
import '../../css/Login.css'

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <div className="container">
                    <div className="logo">
                        KittyGlitter
                    </div>
                    <button id='facebook_login'>
                        Log in with Facebook
                    </button>
                    <hr/>
                    <input id='userName' placeholder='user name' />
                    <button id='user_login'>
                        Log in
                    </button>
                </div>
            </div>
        )
    }
}

export default Login