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
                    <a href="http://localhost:5000/auth/facebook" alt="facebook login button" >
                        <button id='facebook_login'>
                            Log in with Facebook
                        </button>
                    </a>
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